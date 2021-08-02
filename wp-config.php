<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the

 * installation. You don't have to use the web site, you can

 * copy this file to "wp-config.php" and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * MySQL settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://codex.wordpress.org/Editing_wp-config.php

 *

 * @package WordPress

 */


// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', "techypro_dhyan" );


/** MySQL database username */

define( 'DB_USER', "techypro_dhyan" );


/** MySQL database password */

define( 'DB_PASSWORD', "techypro_dhyan123#\$" );


/** MySQL hostname */

define( 'DB_HOST', "localhost" );


/** Database Charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8mb4' );


/** The Database Collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication Unique Keys and Salts.

 *

 * Change these to different unique phrases!

 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}

 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         '`kfM8$$^dr7<Pv/7S`274@HL[<eE[&E3gI$-33t/5U_ag0>|mw2vi(kRG%08tQg&' );

define( 'SECURE_AUTH_KEY',  'Pf+o2bdo^}}[ p0@-(zB;^n(<<CY/iK^M6193`B[No(iUCb3.%{dac*;<c9(G`W*' );

define( 'LOGGED_IN_KEY',    'fk)*cP-N]sPdKMDz:31/(D+A}6tP=6.Nll|1mQo7EjS_qq;bV<[KYC)oq&,<?BnE' );

define( 'NONCE_KEY',        'P&?)?=&N5Dy:rKY4N^{RMy7CK&>; T!0r6`b5hp,hN,,+a]yK3Y5-}EBylfM^zI!' );

define( 'AUTH_SALT',        '1?H%vD{0&*VaRsZym#>%zQ_A6RY1>(jOtx,FoY~T^m*J5=0~GN&d5a&gUcYzlE3)' );

define( 'SECURE_AUTH_SALT', 'K4fW;$PZy%FHJP{d6Z>EhEjM/K|NFA`[k}~?[IU-h1QV$n:vWkq&|,(l*M+c.[Q2' );

define( 'LOGGED_IN_SALT',   '=rrsEZdmv}] )M:PSj^,tM;=n N:<l2>YPJl0w1A6rdbM0huS)ymp^m3`Fb,mp(g' );

define( 'NONCE_SALT',       '+@XYO2|X%SZ-Nv-N/<>t^hGjpLz<m`5<_EETipf=-6B!>u2{dvUH{tt?,9CMQ@Ch' );


/**#@-*/


/**

 * WordPress Database Table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wpd_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the Codex.

 *

 * @link https://codex.wordpress.org/Debugging_in_WordPress

 */

define( 'WP_DEBUG', false );


/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

}


/** Sets up WordPress vars and included files. */

require_once( ABSPATH . 'wp-settings.php' );

