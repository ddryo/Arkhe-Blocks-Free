<?php
/**
 * Plugin Name: Arkhe Blocks
 * Plugin URI: https://arkhe-theme.com
 * Description: A plugin that extends Gutenberg, optimized for the "Arkhe" theme.
 * Version: 1.3.0
 * Author: LOOS,Inc.
 * Author URI: https://loos.co.jp/
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: arkhe-blocks
 * Domain Path: /languages
 *
 * @package Arkhe Blocks
 */

defined( 'ABSPATH' ) || exit;


// 5.0以下のエラー回避
if ( ! function_exists( 'register_block_type' ) ) return;

// 定数定義
define( 'ARKHE_BLOCKS_VERSION', ( defined( 'WP_DEBUG' ) && WP_DEBUG ) ? date_i18n( 'mdGis' ) : '1.3.0' );
define( 'ARKHE_BLOCKS_URL', plugins_url( '/', __FILE__ ) );
define( 'ARKHE_BLOCKS_PATH', plugin_dir_path( __FILE__ ) );


/**
 * CLASSのオートロード
 */
spl_autoload_register(
	function( $classname ) {

		// 名前に Arkhe_Blocks がなければオートロードしない。
		if ( strpos( $classname, 'Arkhe_Blocks' ) === false && strpos( $classname, 'Arkhe_Blocks' ) === false) return;

		$classname = str_replace( '\\', '/', $classname );
		$classname = str_replace( 'Arkhe_Blocks/', '', $classname );
		$file      = ARKHE_BLOCKS_PATH . 'classes/' . $classname . '.php';

		if ( file_exists( $file ) ) require $file;
	}
);


/**
 * プラグイン実行クラス
 *   無料版とPRO版の両方実行されないように注意。
 */
if ( ! class_exists( 'Arkhe_Blocks' ) ) {
	class Arkhe_Blocks extends \Arkhe_Blocks\Data {

		use \Arkhe_Blocks\Admin_Menu;
		use \Arkhe_Blocks\Template_Parts;

		public function __construct() {

			// テーマチェック : IS_ARKHE_THEME は Arkheプラグインで共通
			if ( ! defined( 'IS_ARKHE_THEME' ) ) {
				$theme_data     = wp_get_theme();
				$theme_name     = $theme_data->get( 'Name' );
				$theme_template = $theme_data->get( 'Template' );

				$is_arkhe_theme = ( 'Arkhe' === $theme_name || 'arkhe' === $theme_template );
				define( 'IS_ARKHE_THEME', $is_arkhe_theme );
			}

			// 翻訳ファイルを登録
			if ( 'ja' === determine_locale() ) {
				load_textdomain( 'arkhe-blocks', ARKHE_BLOCKS_PATH . 'languages/arkhe-blocks-ja.mo' );
			} else {
				load_plugin_textdomain( 'arkhe-blocks' );
			}

			// データセット
			self::init();

			// setup
			require_once ARKHE_BLOCKS_PATH . 'inc/setup.php';

			// ファイルの読み込み
			require_once ARKHE_BLOCKS_PATH . 'inc/enqueue_scripts.php';

			// Gutennerg
			require_once ARKHE_BLOCKS_PATH . 'inc/gutenberg.php';

			// 管理メニュー
			require_once ARKHE_BLOCKS_PATH . 'inc/admin_toolbar.php';
			require_once ARKHE_BLOCKS_PATH . 'inc/admin_menu.php';

			if ( is_admin() ) {
				require_once ARKHE_BLOCKS_PATH . 'inc/notice.php';
			}

			// アップデート
			if ( self::IS_PRO ) {
				require_once ARKHE_BLOCKS_PATH . 'inc/update.php';
			}
		}
	}

	/**
	 * プラグインファイルの実行
	 */
	add_action( 'plugins_loaded', function() {
		new Arkhe_Blocks();
	} );

}
