<?php  return array (
  'resourceClass' => 'modDocument',
  'resource' => 
  array (
    'id' => 15,
    'type' => 'document',
    'contentType' => 'text/html',
    'pagetitle' => 'Корзина',
    'longtitle' => 'Оформление заказа',
    'description' => '',
    'alias' => 'cart',
    'link_attributes' => '',
    'published' => 1,
    'pub_date' => 0,
    'unpub_date' => 0,
    'parent' => 0,
    'isfolder' => 0,
    'introtext' => '',
    'content' => '[[!msCart]]
[[!msOrder]]',
    'richtext' => 1,
    'template' => 6,
    'menuindex' => 3,
    'searchable' => 1,
    'cacheable' => 1,
    'createdby' => 1,
    'createdon' => 1462134574,
    'editedby' => 1,
    'editedon' => 1462194902,
    'deleted' => 0,
    'deletedon' => 0,
    'deletedby' => 0,
    'publishedon' => 1462134540,
    'publishedby' => 1,
    'menutitle' => '',
    'donthit' => 0,
    'privateweb' => 0,
    'privatemgr' => 0,
    'content_dispo' => 0,
    'hidemenu' => 0,
    'class_key' => 'modDocument',
    'context_key' => 'web',
    'content_type' => 1,
    'uri' => 'cart',
    'uri_override' => 0,
    'hide_children_in_tree' => 0,
    'show_in_tree' => 1,
    'properties' => NULL,
    '_content' => '<!DOCTYPE html>
<html>
  <head>
    	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="author" content="">
	<base href="http://siana/" />
	<title>Корзина - Siana</title>
	<link href="assets/build/css/normalize.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300&amp;subset=latin,cyrillic-ext,cyrillic" rel="stylesheet">
    <link href="assets/build/css/style.css" rel="stylesheet">
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?&amp;sensor=true"></script>
    <script src="assets/build/js/main.js"></script>

  </head>
  <body>
    <div class="page-wrap">
      <header>
        <div class="container">
          <div class="col-1">
            <ul class="links">
              <li>8-800-100-93-21</li>
              <li><a href="mailto:mail@certa.ru">mail@certa.ru</a></li>
            </ul>
          </div>
          <div class="col-2"><a id="modal" href="javascript:void(0)" onclick="openModal()" data-state="0" class="btn">Перезвоните мне!</a></div>
          <div class="col-3">
		  	[[!msMiniCart]]
          </div>
        </div>
      </header>
      <section id="content">
        <div class="container">
          <div class="logo"><a href="/"><img src="assets/build/img/logo.png" alt=""></a></div>
          <div class="info-block"></div>
          <div class="order">
			[[!msCart]]
[[!msOrder]]
          </div>
        </div>
      </section>
    </div>
    <div class="site-footer">
      <seaction id="buy-now">
        <div class="container">
          <div class="location"><a id="map-data" href="javascript:void(0)" onclick="openMap()" data-state="0">Где купить</a></div>
        </div>
        <div id="map_canvas"></div>
      </seaction>
    <footer id="footer">
      <div class="container">
        <div class="col-1">
          <ul class="links">
            <li>8-800-100-93-21</li>
            <li><a href="#">mail@certa.ru</a></li>
          </ul>
        </div>
        <div class="col-2"><a id="modal" href="javascript:void(0)" onclick="openModal()" data-state="0" class="btn">Перезвоните мне!</a></div>
        <div class="col-3">Производство - <a href="http://certa.ru">НПП Спектр</a></div>
      </div>
    </footer>
</div>
    <div id="overlay"></div>
    <div id="modal-form"><a href="javascript:void(0)" onclick="openModal()" data-state="0" class="close"></a>
      <div class="call-back">
        <form>
          <h4>Перезвоните мне</h4>
          <input type="text" name="" placeholder="Ваше имя">
          <input type="text" name="" placeholder="Ваш номер телефона">
          <input type="submit" value="Заказать звонок" class="btn">
        </form>
      </div>
    </div>
  </body>
</html>',
    '_isForward' => false,
  ),
  'contentType' => 
  array (
    'id' => 1,
    'name' => 'HTML',
    'description' => 'HTML content',
    'mime_type' => 'text/html',
    'file_extensions' => '',
    'headers' => NULL,
    'binary' => 0,
  ),
  'policyCache' => 
  array (
  ),
  'elementCache' => 
  array (
    '[[$Head]]' => '	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="author" content="">
	<base href="http://siana/" />
	<title>Корзина - Siana</title>
	<link href="assets/build/css/normalize.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300&amp;subset=latin,cyrillic-ext,cyrillic" rel="stylesheet">
    <link href="assets/build/css/style.css" rel="stylesheet">
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?&amp;sensor=true"></script>
    <script src="assets/build/js/main.js"></script>
',
    '[[$Footer]]' => '<div class="site-footer">
      <seaction id="buy-now">
        <div class="container">
          <div class="location"><a id="map-data" href="javascript:void(0)" onclick="openMap()" data-state="0">Где купить</a></div>
        </div>
        <div id="map_canvas"></div>
      </seaction>
    <footer id="footer">
      <div class="container">
        <div class="col-1">
          <ul class="links">
            <li>8-800-100-93-21</li>
            <li><a href="#">mail@certa.ru</a></li>
          </ul>
        </div>
        <div class="col-2"><a id="modal" href="javascript:void(0)" onclick="openModal()" data-state="0" class="btn">Перезвоните мне!</a></div>
        <div class="col-3">Производство - <a href="http://certa.ru">НПП Спектр</a></div>
      </div>
    </footer>
</div>
    <div id="overlay"></div>
    <div id="modal-form"><a href="javascript:void(0)" onclick="openModal()" data-state="0" class="close"></a>
      <div class="call-back">
        <form>
          <h4>Перезвоните мне</h4>
          <input type="text" name="" placeholder="Ваше имя">
          <input type="text" name="" placeholder="Ваш номер телефона">
          <input type="submit" value="Заказать звонок" class="btn">
        </form>
      </div>
    </div>',
  ),
  'sourceCache' => 
  array (
    'modChunk' => 
    array (
      'Head' => 
      array (
        'fields' => 
        array (
          'id' => 25,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'Head',
          'description' => 'Head of site with scripts and styles',
          'editor_type' => 0,
          'category' => 0,
          'cache_type' => 0,
          'snippet' => '	<meta charset="[[++modx_charset]]">
	<meta name="description" content="">
	<meta name="author" content="">
	<base href="[[++site_url]]" />
	<title>[[*pagetitle]] - [[++site_name]]</title>
	<link href="assets/build/css/normalize.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300&amp;subset=latin,cyrillic-ext,cyrillic" rel="stylesheet">
    <link href="assets/build/css/style.css" rel="stylesheet">
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?&amp;sensor=true"></script>
    <script src="assets/build/js/main.js"></script>
',
          'locked' => false,
          'properties' => 
          array (
          ),
          'static' => false,
          'static_file' => 'assets/components/themebootstrap/elements/chunks/chunk.head.tpl',
          'content' => '	<meta charset="[[++modx_charset]]">
	<meta name="description" content="">
	<meta name="author" content="">
	<base href="[[++site_url]]" />
	<title>[[*pagetitle]] - [[++site_name]]</title>
	<link href="assets/build/css/normalize.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300&amp;subset=latin,cyrillic-ext,cyrillic" rel="stylesheet">
    <link href="assets/build/css/style.css" rel="stylesheet">
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?&amp;sensor=true"></script>
    <script src="assets/build/js/main.js"></script>
',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
      'Footer' => 
      array (
        'fields' => 
        array (
          'id' => 27,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'Footer',
          'description' => 'Chunk with footer',
          'editor_type' => 0,
          'category' => 0,
          'cache_type' => 0,
          'snippet' => '<div class="site-footer">
      <seaction id="buy-now">
        <div class="container">
          <div class="location"><a id="map-data" href="javascript:void(0)" onclick="openMap()" data-state="0">Где купить</a></div>
        </div>
        <div id="map_canvas"></div>
      </seaction>
    <footer id="footer">
      <div class="container">
        <div class="col-1">
          <ul class="links">
            <li>8-800-100-93-21</li>
            <li><a href="#">mail@certa.ru</a></li>
          </ul>
        </div>
        <div class="col-2"><a id="modal" href="javascript:void(0)" onclick="openModal()" data-state="0" class="btn">Перезвоните мне!</a></div>
        <div class="col-3">Производство - <a href="http://certa.ru">НПП Спектр</a></div>
      </div>
    </footer>
</div>
    <div id="overlay"></div>
    <div id="modal-form"><a href="javascript:void(0)" onclick="openModal()" data-state="0" class="close"></a>
      <div class="call-back">
        <form>
          <h4>Перезвоните мне</h4>
          <input type="text" name="" placeholder="Ваше имя">
          <input type="text" name="" placeholder="Ваш номер телефона">
          <input type="submit" value="Заказать звонок" class="btn">
        </form>
      </div>
    </div>',
          'locked' => false,
          'properties' => 
          array (
          ),
          'static' => false,
          'static_file' => 'assets/components/themebootstrap/elements/chunks/chunk.footer.tpl',
          'content' => '<div class="site-footer">
      <seaction id="buy-now">
        <div class="container">
          <div class="location"><a id="map-data" href="javascript:void(0)" onclick="openMap()" data-state="0">Где купить</a></div>
        </div>
        <div id="map_canvas"></div>
      </seaction>
    <footer id="footer">
      <div class="container">
        <div class="col-1">
          <ul class="links">
            <li>8-800-100-93-21</li>
            <li><a href="#">mail@certa.ru</a></li>
          </ul>
        </div>
        <div class="col-2"><a id="modal" href="javascript:void(0)" onclick="openModal()" data-state="0" class="btn">Перезвоните мне!</a></div>
        <div class="col-3">Производство - <a href="http://certa.ru">НПП Спектр</a></div>
      </div>
    </footer>
</div>
    <div id="overlay"></div>
    <div id="modal-form"><a href="javascript:void(0)" onclick="openModal()" data-state="0" class="close"></a>
      <div class="call-back">
        <form>
          <h4>Перезвоните мне</h4>
          <input type="text" name="" placeholder="Ваше имя">
          <input type="text" name="" placeholder="Ваш номер телефона">
          <input type="submit" value="Заказать звонок" class="btn">
        </form>
      </div>
    </div>',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
      'tpl.msMiniCart' => 
      array (
        'fields' => 
        array (
          'id' => 5,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'tpl.msMiniCart',
          'description' => '',
          'editor_type' => 0,
          'category' => 1,
          'cache_type' => 0,
          'snippet' => '<!--<div id="msMiniCart" [[+total_count:isnot=`0`:then=`class="full"`:else=``]]>
	<div class="empty">
		<h5><i class="glyphicon glyphicon-shopping-cart"></i> [[%ms2_minicart]]</h5>
		[[%ms2_minicart_is_empty]]
	</div>
	<div class="not_empty">
		<h5><i class="glyphicon glyphicon-shopping-cart"></i> [[%ms2_minicart]]</h5>
		[[%ms2_minicart_goods]]: <strong class="ms2_total_count">[[+total_count]]</strong> [[%ms2_frontend_count_unit]],
		[[%ms2_minicart_cost]]: <strong class="ms2_total_cost">[[+total_cost]]</strong> [[%ms2_frontend_currency]]
	</div>
</div>-->
<div class="cart"><span class="ms2_total_count">[[+total_count]]</span> товаров</div>

<div class="modal-cart">
	<div class="triangle"></div>
	<div class="triangle fake"></div>
	<span class="ms2_total_products">[[!msCartCust]]</span>
</div>',
          'locked' => false,
          'properties' => 
          array (
          ),
          'static' => false,
          'static_file' => 'core/components/minishop2/elements/chunks/chunk.ms_minicart.tpl',
          'content' => '<!--<div id="msMiniCart" [[+total_count:isnot=`0`:then=`class="full"`:else=``]]>
	<div class="empty">
		<h5><i class="glyphicon glyphicon-shopping-cart"></i> [[%ms2_minicart]]</h5>
		[[%ms2_minicart_is_empty]]
	</div>
	<div class="not_empty">
		<h5><i class="glyphicon glyphicon-shopping-cart"></i> [[%ms2_minicart]]</h5>
		[[%ms2_minicart_goods]]: <strong class="ms2_total_count">[[+total_count]]</strong> [[%ms2_frontend_count_unit]],
		[[%ms2_minicart_cost]]: <strong class="ms2_total_cost">[[+total_cost]]</strong> [[%ms2_frontend_currency]]
	</div>
</div>-->
<div class="cart"><span class="ms2_total_count">[[+total_count]]</span> товаров</div>

<div class="modal-cart">
	<div class="triangle"></div>
	<div class="triangle fake"></div>
	<span class="ms2_total_products">[[!msCartCust]]</span>
</div>',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
    ),
    'modSnippet' => 
    array (
      'msMiniCart' => 
      array (
        'fields' => 
        array (
          'id' => 3,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'msMiniCart',
          'description' => '',
          'editor_type' => 0,
          'category' => 1,
          'cache_type' => 0,
          'snippet' => '/* @var miniShop2 $miniShop2 */
$miniShop2 = $modx->getService(\'minishop2\');
$miniShop2->initialize($modx->context->key);

$cart = $miniShop2->cart->status();
$cart[\'total_cost\'] = $miniShop2->formatPrice($cart[\'total_cost\']);
$cart[\'total_weight\'] = $miniShop2->formatWeight($cart[\'total_weight\']);

return !empty($tpl) ? $modx->getChunk($tpl, $cart) : print_r($cart,1);',
          'locked' => false,
          'properties' => 
          array (
            'tpl' => 
            array (
              'name' => 'tpl',
              'desc' => 'ms2_prop_tpl',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msMiniCart',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления для каждого результата',
              'area_trans' => '',
            ),
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => 'core/components/minishop2/elements/snippets/snippet.ms_minicart.php',
          'content' => '/* @var miniShop2 $miniShop2 */
$miniShop2 = $modx->getService(\'minishop2\');
$miniShop2->initialize($modx->context->key);

$cart = $miniShop2->cart->status();
$cart[\'total_cost\'] = $miniShop2->formatPrice($cart[\'total_cost\']);
$cart[\'total_weight\'] = $miniShop2->formatWeight($cart[\'total_weight\']);

return !empty($tpl) ? $modx->getChunk($tpl, $cart) : print_r($cart,1);',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
      'msCartCust' => 
      array (
        'fields' => 
        array (
          'id' => 23,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'msCartCust',
          'description' => '',
          'editor_type' => 0,
          'category' => 1,
          'cache_type' => 0,
          'snippet' => '/* @var array $scriptProperties */
/* @var miniShop2 $miniShop2 */
$miniShop2 = $modx->getService(\'minishop2\');
$miniShop2->initialize($modx->context->key);
/* @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {return false;}
$pdoFetch = new pdoFetch($modx, $scriptProperties);

$cart = $miniShop2->cart->get();
$status = $miniShop2->cart->status();
if (!empty($_GET[\'msorder\'])) {
   return \'\';
}
elseif (empty($status[\'total_count\'])) {
   return !empty($tplEmpty) ? $pdoFetch->getChunk($tplEmpty) : \'\';
}

// Include Thumbnails
$thumbsLeftJoin = \'\';
$thumbsSelect = array();
if (!empty($includeThumbs)) {
   $thumbs = array_map(\'trim\',explode(\',\',$includeThumbs));
   if(!empty($thumbs[0])){
      foreach ($thumbs as $thumb) {
         $thumbsLeftJoin .= \',{"class":"msProductFile","alias":"\'.$thumb.\'","on":"\'.$thumb.\'.product_id = msProduct.id AND \'.$thumb.\'.parent != 0 AND \'.$thumb.\'.path LIKE \\\'%/\'.$thumb.\'/\\\'"}\';
         $thumbsSelect[] = \' "\'.$thumb.\'":"\'.$thumb.\'.url as \'.$thumb.\'" \';
      }
      $pdoFetch->addTime(\'Included list of thumbnails: <b>\'.implode(\', \',$thumbs).\'</b>.\');
   }
}
// End of including Thumbnails

// Fields to select
$resourceColumns = !empty($includeContent) ?  $modx->getSelectColumns(\'msProduct\', \'msProduct\') : $modx->getSelectColumns(\'msProduct\', \'msProduct\', \'\', array(\'content\'), true);
$dataColumns = $modx->getSelectColumns(\'msProductData\', \'Data\', \'\', array(\'id\'), true);
$vendorColumns = $modx->getSelectColumns(\'msVendor\', \'Vendor\', \'vendor.\', array(\'id\'), true);

// Tables for joining
$leftJoin = \'{"class":"msProductData","alias":"Data","on":"msProduct.id=Data.id"},{"class":"msVendor","alias":"Vendor","on":"Data.vendor=Vendor.id"}\';
if (!empty($thumbsLeftJoin)) {$leftJoin .= $thumbsLeftJoin;}
$select = \'"msProduct":"\'.$resourceColumns.\'","Data":"\'.$dataColumns.\'","Vendor":"\'.$vendorColumns.\'"\';
if (!empty($thumbsSelect)) {$select .= \',\'.implode(\',\', $thumbsSelect);}
$pdoFetch->addTime(\'Query parameters are prepared.\');

$scriptProperties[\'tpl\'] = $scriptProperties[\'tplRow\'];
$pdoFetch->setConfig($scriptProperties);

// Working
$outer = array(\'goods\' => \'\', \'total_count\' => 0, \'total_weight\' => 0, \'total_cost\' => 0);
foreach ($cart as $k => $v) {

   $default = array(
      \'class\' => \'msProduct\'
      ,\'where\' => \'{"msProduct.id":"\'.$v[\'id\'].\'","class_key":"msProduct"}\'
      ,\'leftJoin\' => \'[\'.$leftJoin.\']\'
      ,\'select\' => \'{\'.$select.\'}\'
      ,\'sortby\' => \'id\'
      ,\'sortdir\' => \'ASC\'
      ,\'groupby\' => \'msProduct.id\'
      ,\'fastMode\' => false
      ,\'limit\' => 0
      ,\'return\' => \'data\'
      ,\'nestedChunkPrefix\' => \'minishop2_\'
   );
   // Merge all properties and run!
   $pdoFetch->config = array_merge($pdoFetch->config, $default, $scriptProperties);
   $rows = $pdoFetch->run();

   // If not empty and relevant to the context, then show
   if (!empty($rows[0]) && (empty($v[\'ctx\']) || $v[\'ctx\'] == $modx->context->key)) {
      $row = $rows[0];
      $row[\'key\'] = $k;
      $row[\'count\'] = $v[\'count\'];
      $row[\'old_price\'] = $miniShop2->formatPrice(
         $row[\'price\'] != $v[\'price\']
            ? $row[\'price\']
            : $row[\'old_price\']
      );
      $row[\'price\'] = $miniShop2->formatPrice($v[\'price\']);
      $row[\'weight\'] = $miniShop2->formatWeight($v[\'weight\']);
      $row[\'cost\'] = $miniShop2->formatPrice($v[\'count\'] * $v[\'price\']);

      // Additional properties of product
      if (!empty($v[\'options\']) && is_array($v[\'options\'])) {
         foreach ($v[\'options\'] as $key => $value) {
            $row[\'option.\'.$key] = $value;
         }
      }
      unset($v[\'options\']);

        // Add option values
        $options = $modx->call(\'msProductData\', \'loadOptions\', array(&$modx, $row[\'id\']));
        $row = array_merge($row, $options);

      $row[\'idx\'] = $pdoFetch->idx++;
      $tplRow = \'tpl.msCartCust.row\';
      $outer[\'goods\'] .= empty($tplRow)
         ? $pdoFetch->getChunk(\'\', $row)
         : $pdoFetch->getChunk($tplRow, $row, $pdoFetch->config[\'fastMode\']);

      $outer[\'total_count\'] += $v[\'count\'];
      $outer[\'total_cost\'] +=  $v[\'count\'] * $v[\'price\'];
      $outer[\'total_weight\'] += $v[\'count\'] * $v[\'weight\'];
   }
}

$outer[\'total_cost\'] = $miniShop2->formatPrice($outer[\'total_cost\']);
$outer[\'total_weight\'] = $miniShop2->formatWeight($outer[\'total_weight\']);

$tplOuter = \'tpl.msCartCust.outer\';

return empty($tplOuter)
   ? $pdoFetch->getChunk(\'\', $outer)
   : $pdoFetch->getChunk($tplOuter, $outer, $pdoFetch->config[\'fastMode\']);',
          'locked' => false,
          'properties' => 
          array (
            'includeTVs' => 
            array (
              'name' => 'includeTVs',
              'desc' => 'ms2_prop_includeTVs',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Список ТВ параметров для выборки, через запятую. Например: "action,time" дадут плейсхолдеры [[+action]] и [[+time]].',
              'area_trans' => '',
            ),
            'includeThumbs' => 
            array (
              'name' => 'includeThumbs',
              'desc' => 'ms2_prop_includeThumbs',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Список размеров превьюшек для выборки, через запятую. Например: "120x90,360x240" дадут плейслолдеры [[+120x90]] и [[+360x240]]. Картинки должны быть заранее сгенерированы в галерее товара.',
              'area_trans' => '',
            ),
            'tplEmpty' => 
            array (
              'name' => 'tplEmpty',
              'desc' => 'ms2_prop_tplEmpty',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msCart.empty',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Чанк, который выводится при отсутствии результатов.',
              'area_trans' => '',
            ),
            'tplOuter' => 
            array (
              'name' => 'tplOuter',
              'desc' => 'ms2_prop_tplOuter',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msCart.outer',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Обёртка для вывода результатов работы сниппета.',
              'area_trans' => '',
            ),
            'tplRow' => 
            array (
              'name' => 'tplRow',
              'desc' => 'ms2_prop_tplRow',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msCart.row',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления одного элемента выборки.',
              'area_trans' => '',
            ),
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => 'core/components/minishop2/elements/snippets/snippet.ms_cart.php',
          'content' => '/* @var array $scriptProperties */
/* @var miniShop2 $miniShop2 */
$miniShop2 = $modx->getService(\'minishop2\');
$miniShop2->initialize($modx->context->key);
/* @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {return false;}
$pdoFetch = new pdoFetch($modx, $scriptProperties);

$cart = $miniShop2->cart->get();
$status = $miniShop2->cart->status();
if (!empty($_GET[\'msorder\'])) {
   return \'\';
}
elseif (empty($status[\'total_count\'])) {
   return !empty($tplEmpty) ? $pdoFetch->getChunk($tplEmpty) : \'\';
}

// Include Thumbnails
$thumbsLeftJoin = \'\';
$thumbsSelect = array();
if (!empty($includeThumbs)) {
   $thumbs = array_map(\'trim\',explode(\',\',$includeThumbs));
   if(!empty($thumbs[0])){
      foreach ($thumbs as $thumb) {
         $thumbsLeftJoin .= \',{"class":"msProductFile","alias":"\'.$thumb.\'","on":"\'.$thumb.\'.product_id = msProduct.id AND \'.$thumb.\'.parent != 0 AND \'.$thumb.\'.path LIKE \\\'%/\'.$thumb.\'/\\\'"}\';
         $thumbsSelect[] = \' "\'.$thumb.\'":"\'.$thumb.\'.url as \'.$thumb.\'" \';
      }
      $pdoFetch->addTime(\'Included list of thumbnails: <b>\'.implode(\', \',$thumbs).\'</b>.\');
   }
}
// End of including Thumbnails

// Fields to select
$resourceColumns = !empty($includeContent) ?  $modx->getSelectColumns(\'msProduct\', \'msProduct\') : $modx->getSelectColumns(\'msProduct\', \'msProduct\', \'\', array(\'content\'), true);
$dataColumns = $modx->getSelectColumns(\'msProductData\', \'Data\', \'\', array(\'id\'), true);
$vendorColumns = $modx->getSelectColumns(\'msVendor\', \'Vendor\', \'vendor.\', array(\'id\'), true);

// Tables for joining
$leftJoin = \'{"class":"msProductData","alias":"Data","on":"msProduct.id=Data.id"},{"class":"msVendor","alias":"Vendor","on":"Data.vendor=Vendor.id"}\';
if (!empty($thumbsLeftJoin)) {$leftJoin .= $thumbsLeftJoin;}
$select = \'"msProduct":"\'.$resourceColumns.\'","Data":"\'.$dataColumns.\'","Vendor":"\'.$vendorColumns.\'"\';
if (!empty($thumbsSelect)) {$select .= \',\'.implode(\',\', $thumbsSelect);}
$pdoFetch->addTime(\'Query parameters are prepared.\');

$scriptProperties[\'tpl\'] = $scriptProperties[\'tplRow\'];
$pdoFetch->setConfig($scriptProperties);

// Working
$outer = array(\'goods\' => \'\', \'total_count\' => 0, \'total_weight\' => 0, \'total_cost\' => 0);
foreach ($cart as $k => $v) {

   $default = array(
      \'class\' => \'msProduct\'
      ,\'where\' => \'{"msProduct.id":"\'.$v[\'id\'].\'","class_key":"msProduct"}\'
      ,\'leftJoin\' => \'[\'.$leftJoin.\']\'
      ,\'select\' => \'{\'.$select.\'}\'
      ,\'sortby\' => \'id\'
      ,\'sortdir\' => \'ASC\'
      ,\'groupby\' => \'msProduct.id\'
      ,\'fastMode\' => false
      ,\'limit\' => 0
      ,\'return\' => \'data\'
      ,\'nestedChunkPrefix\' => \'minishop2_\'
   );
   // Merge all properties and run!
   $pdoFetch->config = array_merge($pdoFetch->config, $default, $scriptProperties);
   $rows = $pdoFetch->run();

   // If not empty and relevant to the context, then show
   if (!empty($rows[0]) && (empty($v[\'ctx\']) || $v[\'ctx\'] == $modx->context->key)) {
      $row = $rows[0];
      $row[\'key\'] = $k;
      $row[\'count\'] = $v[\'count\'];
      $row[\'old_price\'] = $miniShop2->formatPrice(
         $row[\'price\'] != $v[\'price\']
            ? $row[\'price\']
            : $row[\'old_price\']
      );
      $row[\'price\'] = $miniShop2->formatPrice($v[\'price\']);
      $row[\'weight\'] = $miniShop2->formatWeight($v[\'weight\']);
      $row[\'cost\'] = $miniShop2->formatPrice($v[\'count\'] * $v[\'price\']);

      // Additional properties of product
      if (!empty($v[\'options\']) && is_array($v[\'options\'])) {
         foreach ($v[\'options\'] as $key => $value) {
            $row[\'option.\'.$key] = $value;
         }
      }
      unset($v[\'options\']);

        // Add option values
        $options = $modx->call(\'msProductData\', \'loadOptions\', array(&$modx, $row[\'id\']));
        $row = array_merge($row, $options);

      $row[\'idx\'] = $pdoFetch->idx++;
      $tplRow = \'tpl.msCartCust.row\';
      $outer[\'goods\'] .= empty($tplRow)
         ? $pdoFetch->getChunk(\'\', $row)
         : $pdoFetch->getChunk($tplRow, $row, $pdoFetch->config[\'fastMode\']);

      $outer[\'total_count\'] += $v[\'count\'];
      $outer[\'total_cost\'] +=  $v[\'count\'] * $v[\'price\'];
      $outer[\'total_weight\'] += $v[\'count\'] * $v[\'weight\'];
   }
}

$outer[\'total_cost\'] = $miniShop2->formatPrice($outer[\'total_cost\']);
$outer[\'total_weight\'] = $miniShop2->formatWeight($outer[\'total_weight\']);

$tplOuter = \'tpl.msCartCust.outer\';

return empty($tplOuter)
   ? $pdoFetch->getChunk(\'\', $outer)
   : $pdoFetch->getChunk($tplOuter, $outer, $pdoFetch->config[\'fastMode\']);',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
      'msCart' => 
      array (
        'fields' => 
        array (
          'id' => 2,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'msCart',
          'description' => '',
          'editor_type' => 0,
          'category' => 1,
          'cache_type' => 0,
          'snippet' => '/* @var array $scriptProperties */
/* @var miniShop2 $miniShop2 */
$miniShop2 = $modx->getService(\'minishop2\');
$miniShop2->initialize($modx->context->key);
/* @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {return false;}
$pdoFetch = new pdoFetch($modx, $scriptProperties);

$cart = $miniShop2->cart->get();
$status = $miniShop2->cart->status();
if (!empty($_GET[\'msorder\'])) {
	return \'\';
}
elseif (empty($status[\'total_count\'])) {
	return !empty($tplEmpty) ? $pdoFetch->getChunk($tplEmpty) : \'\';
}

// Include Thumbnails
$thumbsLeftJoin = \'\';
$thumbsSelect = array();
if (!empty($includeThumbs)) {
	$thumbs = array_map(\'trim\',explode(\',\',$includeThumbs));
	if(!empty($thumbs[0])){
		foreach ($thumbs as $thumb) {
			$thumbsLeftJoin .= \',{"class":"msProductFile","alias":"\'.$thumb.\'","on":"\'.$thumb.\'.product_id = msProduct.id AND \'.$thumb.\'.parent != 0 AND \'.$thumb.\'.path LIKE \\\'%/\'.$thumb.\'/\\\'"}\';
			$thumbsSelect[] = \' "\'.$thumb.\'":"\'.$thumb.\'.url as \'.$thumb.\'" \';
		}
		$pdoFetch->addTime(\'Included list of thumbnails: <b>\'.implode(\', \',$thumbs).\'</b>.\');
	}
}
// End of including Thumbnails

// Fields to select
$resourceColumns = !empty($includeContent) ?  $modx->getSelectColumns(\'msProduct\', \'msProduct\') : $modx->getSelectColumns(\'msProduct\', \'msProduct\', \'\', array(\'content\'), true);
$dataColumns = $modx->getSelectColumns(\'msProductData\', \'Data\', \'\', array(\'id\'), true);
$vendorColumns = $modx->getSelectColumns(\'msVendor\', \'Vendor\', \'vendor.\', array(\'id\'), true);

// Tables for joining
$leftJoin = \'{"class":"msProductData","alias":"Data","on":"msProduct.id=Data.id"},{"class":"msVendor","alias":"Vendor","on":"Data.vendor=Vendor.id"}\';
if (!empty($thumbsLeftJoin)) {$leftJoin .= $thumbsLeftJoin;}
$select = \'"msProduct":"\'.$resourceColumns.\'","Data":"\'.$dataColumns.\'","Vendor":"\'.$vendorColumns.\'"\';
if (!empty($thumbsSelect)) {$select .= \',\'.implode(\',\', $thumbsSelect);}
$pdoFetch->addTime(\'Query parameters are prepared.\');

$scriptProperties[\'tpl\'] = $scriptProperties[\'tplRow\'];
$pdoFetch->setConfig($scriptProperties);

// Working
$outer = array(\'goods\' => \'\', \'total_count\' => 0, \'total_weight\' => 0, \'total_cost\' => 0);
foreach ($cart as $k => $v) {

	$default = array(
		\'class\' => \'msProduct\'
		,\'where\' => \'{"msProduct.id":"\'.$v[\'id\'].\'","class_key":"msProduct"}\'
		,\'leftJoin\' => \'[\'.$leftJoin.\']\'
		,\'select\' => \'{\'.$select.\'}\'
		,\'sortby\' => \'id\'
		,\'sortdir\' => \'ASC\'
		,\'groupby\' => \'msProduct.id\'
		,\'fastMode\' => false
		,\'limit\' => 0
		,\'return\' => \'data\'
		,\'nestedChunkPrefix\' => \'minishop2_\'
	);
	// Merge all properties and run!
	$pdoFetch->config = array_merge($pdoFetch->config, $default, $scriptProperties);
	$rows = $pdoFetch->run();

	// If not empty and relevant to the context, then show
	if (!empty($rows[0]) && (empty($v[\'ctx\']) || $v[\'ctx\'] == $modx->context->key)) {
		$row = $rows[0];
		$row[\'key\'] = $k;
		$row[\'count\'] = $v[\'count\'];
		$row[\'old_price\'] = $miniShop2->formatPrice(
			$row[\'price\'] != $v[\'price\']
				? $row[\'price\']
				: $row[\'old_price\']
		);
		$row[\'price\'] = $miniShop2->formatPrice($v[\'price\']);
		$row[\'weight\'] = $miniShop2->formatWeight($v[\'weight\']);
		$row[\'cost\'] = $miniShop2->formatPrice($v[\'count\'] * $v[\'price\']);
		$row[\'total_item\'] = $v[\'count\'] * $v[\'price\'];


		// Additional properties of product
		if (!empty($v[\'options\']) && is_array($v[\'options\'])) {
			foreach ($v[\'options\'] as $key => $value) {
				$row[\'option.\'.$key] = $value;
			}
		}
		unset($v[\'options\']);

        // Add option values
        $options = $modx->call(\'msProductData\', \'loadOptions\', array(&$modx, $row[\'id\']));
        $row = array_merge($row, $options);

		$row[\'idx\'] = $pdoFetch->idx++;
		$tplRow = $pdoFetch->defineChunk($row);
		$outer[\'goods\'] .= empty($tplRow)
			? $pdoFetch->getChunk(\'\', $row)
			: $pdoFetch->getChunk($tplRow, $row, $pdoFetch->config[\'fastMode\']);

		$outer[\'total_count\'] += $v[\'count\'];
		$outer[\'total_cost\'] +=  $v[\'count\'] * $v[\'price\'];
		$outer[\'total_weight\'] += $v[\'count\'] * $v[\'weight\'];
	}
}



$outer[\'total_cost\'] = $miniShop2->formatPrice($outer[\'total_cost\']);
$outer[\'total_weight\'] = $miniShop2->formatWeight($outer[\'total_weight\']);


return empty($tplOuter)
	? $pdoFetch->getChunk(\'\', $outer)
	: $pdoFetch->getChunk($tplOuter, $outer, $pdoFetch->config[\'fastMode\']);',
          'locked' => false,
          'properties' => 
          array (
            'includeTVs' => 
            array (
              'name' => 'includeTVs',
              'desc' => 'ms2_prop_includeTVs',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Список ТВ параметров для выборки, через запятую. Например: "action,time" дадут плейсхолдеры [[+action]] и [[+time]].',
              'area_trans' => '',
            ),
            'includeThumbs' => 
            array (
              'name' => 'includeThumbs',
              'desc' => 'ms2_prop_includeThumbs',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Список размеров превьюшек для выборки, через запятую. Например: "120x90,360x240" дадут плейслолдеры [[+120x90]] и [[+360x240]]. Картинки должны быть заранее сгенерированы в галерее товара.',
              'area_trans' => '',
            ),
            'tplEmpty' => 
            array (
              'name' => 'tplEmpty',
              'desc' => 'ms2_prop_tplEmpty',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msCart.empty',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Чанк, который выводится при отсутствии результатов.',
              'area_trans' => '',
            ),
            'tplOuter' => 
            array (
              'name' => 'tplOuter',
              'desc' => 'ms2_prop_tplOuter',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msCart.outer',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Обёртка для вывода результатов работы сниппета.',
              'area_trans' => '',
            ),
            'tplRow' => 
            array (
              'name' => 'tplRow',
              'desc' => 'ms2_prop_tplRow',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msCart.row',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления одного элемента выборки.',
              'area_trans' => '',
            ),
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => 'core/components/minishop2/elements/snippets/snippet.ms_cart.php',
          'content' => '/* @var array $scriptProperties */
/* @var miniShop2 $miniShop2 */
$miniShop2 = $modx->getService(\'minishop2\');
$miniShop2->initialize($modx->context->key);
/* @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {return false;}
$pdoFetch = new pdoFetch($modx, $scriptProperties);

$cart = $miniShop2->cart->get();
$status = $miniShop2->cart->status();
if (!empty($_GET[\'msorder\'])) {
	return \'\';
}
elseif (empty($status[\'total_count\'])) {
	return !empty($tplEmpty) ? $pdoFetch->getChunk($tplEmpty) : \'\';
}

// Include Thumbnails
$thumbsLeftJoin = \'\';
$thumbsSelect = array();
if (!empty($includeThumbs)) {
	$thumbs = array_map(\'trim\',explode(\',\',$includeThumbs));
	if(!empty($thumbs[0])){
		foreach ($thumbs as $thumb) {
			$thumbsLeftJoin .= \',{"class":"msProductFile","alias":"\'.$thumb.\'","on":"\'.$thumb.\'.product_id = msProduct.id AND \'.$thumb.\'.parent != 0 AND \'.$thumb.\'.path LIKE \\\'%/\'.$thumb.\'/\\\'"}\';
			$thumbsSelect[] = \' "\'.$thumb.\'":"\'.$thumb.\'.url as \'.$thumb.\'" \';
		}
		$pdoFetch->addTime(\'Included list of thumbnails: <b>\'.implode(\', \',$thumbs).\'</b>.\');
	}
}
// End of including Thumbnails

// Fields to select
$resourceColumns = !empty($includeContent) ?  $modx->getSelectColumns(\'msProduct\', \'msProduct\') : $modx->getSelectColumns(\'msProduct\', \'msProduct\', \'\', array(\'content\'), true);
$dataColumns = $modx->getSelectColumns(\'msProductData\', \'Data\', \'\', array(\'id\'), true);
$vendorColumns = $modx->getSelectColumns(\'msVendor\', \'Vendor\', \'vendor.\', array(\'id\'), true);

// Tables for joining
$leftJoin = \'{"class":"msProductData","alias":"Data","on":"msProduct.id=Data.id"},{"class":"msVendor","alias":"Vendor","on":"Data.vendor=Vendor.id"}\';
if (!empty($thumbsLeftJoin)) {$leftJoin .= $thumbsLeftJoin;}
$select = \'"msProduct":"\'.$resourceColumns.\'","Data":"\'.$dataColumns.\'","Vendor":"\'.$vendorColumns.\'"\';
if (!empty($thumbsSelect)) {$select .= \',\'.implode(\',\', $thumbsSelect);}
$pdoFetch->addTime(\'Query parameters are prepared.\');

$scriptProperties[\'tpl\'] = $scriptProperties[\'tplRow\'];
$pdoFetch->setConfig($scriptProperties);

// Working
$outer = array(\'goods\' => \'\', \'total_count\' => 0, \'total_weight\' => 0, \'total_cost\' => 0);
foreach ($cart as $k => $v) {

	$default = array(
		\'class\' => \'msProduct\'
		,\'where\' => \'{"msProduct.id":"\'.$v[\'id\'].\'","class_key":"msProduct"}\'
		,\'leftJoin\' => \'[\'.$leftJoin.\']\'
		,\'select\' => \'{\'.$select.\'}\'
		,\'sortby\' => \'id\'
		,\'sortdir\' => \'ASC\'
		,\'groupby\' => \'msProduct.id\'
		,\'fastMode\' => false
		,\'limit\' => 0
		,\'return\' => \'data\'
		,\'nestedChunkPrefix\' => \'minishop2_\'
	);
	// Merge all properties and run!
	$pdoFetch->config = array_merge($pdoFetch->config, $default, $scriptProperties);
	$rows = $pdoFetch->run();

	// If not empty and relevant to the context, then show
	if (!empty($rows[0]) && (empty($v[\'ctx\']) || $v[\'ctx\'] == $modx->context->key)) {
		$row = $rows[0];
		$row[\'key\'] = $k;
		$row[\'count\'] = $v[\'count\'];
		$row[\'old_price\'] = $miniShop2->formatPrice(
			$row[\'price\'] != $v[\'price\']
				? $row[\'price\']
				: $row[\'old_price\']
		);
		$row[\'price\'] = $miniShop2->formatPrice($v[\'price\']);
		$row[\'weight\'] = $miniShop2->formatWeight($v[\'weight\']);
		$row[\'cost\'] = $miniShop2->formatPrice($v[\'count\'] * $v[\'price\']);
		$row[\'total_item\'] = $v[\'count\'] * $v[\'price\'];


		// Additional properties of product
		if (!empty($v[\'options\']) && is_array($v[\'options\'])) {
			foreach ($v[\'options\'] as $key => $value) {
				$row[\'option.\'.$key] = $value;
			}
		}
		unset($v[\'options\']);

        // Add option values
        $options = $modx->call(\'msProductData\', \'loadOptions\', array(&$modx, $row[\'id\']));
        $row = array_merge($row, $options);

		$row[\'idx\'] = $pdoFetch->idx++;
		$tplRow = $pdoFetch->defineChunk($row);
		$outer[\'goods\'] .= empty($tplRow)
			? $pdoFetch->getChunk(\'\', $row)
			: $pdoFetch->getChunk($tplRow, $row, $pdoFetch->config[\'fastMode\']);

		$outer[\'total_count\'] += $v[\'count\'];
		$outer[\'total_cost\'] +=  $v[\'count\'] * $v[\'price\'];
		$outer[\'total_weight\'] += $v[\'count\'] * $v[\'weight\'];
	}
}



$outer[\'total_cost\'] = $miniShop2->formatPrice($outer[\'total_cost\']);
$outer[\'total_weight\'] = $miniShop2->formatWeight($outer[\'total_weight\']);


return empty($tplOuter)
	? $pdoFetch->getChunk(\'\', $outer)
	: $pdoFetch->getChunk($tplOuter, $outer, $pdoFetch->config[\'fastMode\']);',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
      'phpthumbof' => 
      array (
        'fields' => 
        array (
          'id' => 25,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'phpthumbof',
          'description' => 'A custom output filter that generates thumbnails securely with phpThumb.',
          'editor_type' => 0,
          'category' => 0,
          'cache_type' => 0,
          'snippet' => '/**
 * phpThumbOf
 *
 * Copyright 2009-2012 by Shaun McCormick <shaun@modx.com>
 *
 * phpThumbOf is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option) any
 * later version.
 *
 * phpThumbOf is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * phpThumbOf; if not, write to the Free Software Foundation, Inc., 59 Temple
 * Place, Suite 330, Boston, MA 02111-1307 USA
 *
 * @package phpthumbof
 */
/**
 * A custom output filter for phpThumb
 *
 * @var modX $modx
 * @var array $scriptProperties
 * @var phpThumbOf $phpThumbOf
 * @var string $input
 * @var string|array $options
 *
 * @package phpthumbof
 */
if (empty($modx)) return \'\';
if (!$modx->loadClass(\'modPhpThumb\',$modx->getOption(\'core_path\').\'model/phpthumb/\',true,true)) {
    $modx->log(modX::LOG_LEVEL_ERROR,\'[phpThumbOf] Could not load modPhpThumb class.\');
    return \'\';
}
if (empty($input)) {
    $modx->log(modX::LOG_LEVEL_DEBUG,\'[phpThumbOf] Empty image path passed, aborting.\');
    return \'\';
}
$modelPath = $modx->getOption(\'phpthumbof.core_path\',null,$modx->getOption(\'core_path\').\'components/phpthumbof/\').\'model/\';
require_once $modelPath.\'phpthumbof/phpthumbof.class.php\';
$phpThumbOf = new phpThumbOf($modx,$scriptProperties);

$phpThumbOf->getCacheDirectory();
$phpThumbOf->ensureCacheDirectoryIsWritable();

$thumbnail = $phpThumbOf->createThumbnailObject();
$thumbnail->setInput($input);
$thumbnail->setOptions($options);
$thumbnail->initializeService();
return $thumbnail->render();',
          'locked' => false,
          'properties' => NULL,
          'moduleguid' => '',
          'static' => false,
          'static_file' => '',
          'content' => '/**
 * phpThumbOf
 *
 * Copyright 2009-2012 by Shaun McCormick <shaun@modx.com>
 *
 * phpThumbOf is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option) any
 * later version.
 *
 * phpThumbOf is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * phpThumbOf; if not, write to the Free Software Foundation, Inc., 59 Temple
 * Place, Suite 330, Boston, MA 02111-1307 USA
 *
 * @package phpthumbof
 */
/**
 * A custom output filter for phpThumb
 *
 * @var modX $modx
 * @var array $scriptProperties
 * @var phpThumbOf $phpThumbOf
 * @var string $input
 * @var string|array $options
 *
 * @package phpthumbof
 */
if (empty($modx)) return \'\';
if (!$modx->loadClass(\'modPhpThumb\',$modx->getOption(\'core_path\').\'model/phpthumb/\',true,true)) {
    $modx->log(modX::LOG_LEVEL_ERROR,\'[phpThumbOf] Could not load modPhpThumb class.\');
    return \'\';
}
if (empty($input)) {
    $modx->log(modX::LOG_LEVEL_DEBUG,\'[phpThumbOf] Empty image path passed, aborting.\');
    return \'\';
}
$modelPath = $modx->getOption(\'phpthumbof.core_path\',null,$modx->getOption(\'core_path\').\'components/phpthumbof/\').\'model/\';
require_once $modelPath.\'phpthumbof/phpthumbof.class.php\';
$phpThumbOf = new phpThumbOf($modx,$scriptProperties);

$phpThumbOf->getCacheDirectory();
$phpThumbOf->ensureCacheDirectoryIsWritable();

$thumbnail = $phpThumbOf->createThumbnailObject();
$thumbnail->setInput($input);
$thumbnail->setOptions($options);
$thumbnail->initializeService();
return $thumbnail->render();',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
        ),
      ),
      'pdoField' => 
      array (
        'fields' => 
        array (
          'id' => 12,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'pdoField',
          'description' => '',
          'editor_type' => 0,
          'category' => 2,
          'cache_type' => 0,
          'snippet' => '/** @var array $scriptProperties */
if (!empty($input)) {
    $id = $input;
}
if (!isset($default)) {
    $default = \'\';
}
if (!isset($output)) {
    $output = \'\';
}
$class = $modx->getOption(\'class\', $scriptProperties, \'modResource\', true);
$isResource = $class == \'modResource\' || in_array($class, $modx->getDescendants(\'modResource\'));

if (empty($field)) {
    $field = \'pagetitle\';
}
$top = isset($top) ? intval($top) : 0;
$topLevel = isset($topLevel) ? intval($topLevel) : 0;
if (!empty($options)) {
    $options = trim($options);
    if ($options[0] == \'{\') {
        $tmp = $modx->fromJSON($options);
        if (is_array($tmp)) {
            extract($tmp);
            $scriptProperties = array_merge($scriptProperties, $tmp);
        }
    } else {
        $field = $options;
    }
}
if (empty($id)) {
    if (!empty($modx->resource)) {
        $id = $modx->resource->id;
    } else {
        return \'You must specify an id of \' . $class;
    }
}
if (!isset($context)) {
    $context = \'\';
}

// Gets the parent from root of context, if specified
if ($isResource && $id && ($top || $topLevel)) {
    // Select needed context for parents functionality
    if (empty($context)) {
        $q = $modx->newQuery($class, $id);
        $q->select(\'context_key\');
        $tstart = microtime(true);
        if ($q->prepare() && $q->stmt->execute()) {
            $modx->queryTime += microtime(true) - $tstart;
            $modx->executedQueries++;
            $context = $q->stmt->fetch(PDO::FETCH_COLUMN);
        }
    }
    // Original pdoField logic
    if (empty($ultimate)) {
        if ($topLevel) {
            $pids = $modx->getChildIds(0, $topLevel, array(\'context\' => $context));
            $pid = $id;
            while (true) {
                $tmp = $modx->getParentIds($pid, 1, array(\'context\' => $context));
                if (!$pid = current($tmp)) {
                    break;
                } elseif (in_array($pid, $pids)) {
                    $id = $pid;
                    break;
                }
            }
        } elseif ($top) {
            $pid = $id;
            for ($i = 1; $i <= $top; $i++) {
                $tmp = $modx->getParentIds($pid, 1, array(\'context\' => $context));
                if (!$pid = current($tmp)) {
                    break;
                }
                $id = $pid;
            }
        }
    }
    // UltimateParent logic
    // https://github.com/splittingred/UltimateParent/blob/develop/core/components/ultimateparent/snippet.ultimateparent.php
    elseif ($id != $top) {
        $pid = $id;
        $pids = $modx->getParentIds($id, 10, array(\'context\' => $context));
        if (!$topLevel || count($pids) >= $topLevel) {
            while ($parentIds = $modx->getParentIds($id, 1, array(\'context\' => $context))) {
                $pid = array_pop($parentIds);
                if ($pid == $top) {
                    break;
                }
                $id = $pid;
                $parentIds = $modx->getParentIds($id, 10, array(\'context\' => $context));
                if ($topLevel && count($parentIds) < $topLevel) {
                    break;
                }
            }
        }
    }
}

/** @var pdoFetch $pdoFetch */
$fqn = $modx->getOption(\'pdoFetch.class\', null, \'pdotools.pdofetch\', true);
$path = $modx->getOption(\'pdofetch_class_path\', null, MODX_CORE_PATH . \'components/pdotools/model/\', true);
if ($pdoClass = $modx->loadClass($fqn, $path, false, true)) {
    $pdoFetch = new $pdoClass($modx, $scriptProperties);
} else {
    return false;
}
$pdoFetch->addTime(\'pdoTools loaded\');

$where = array($class . \'.id\' => $id);
// Add custom parameters
foreach (array(\'where\') as $v) {
    if (!empty($scriptProperties[$v])) {
        $tmp = $modx->fromJSON($scriptProperties[$v]);
        if (is_array($tmp)) {
            $$v = array_merge($$v, $tmp);
        }
    }
    unset($scriptProperties[$v]);
}
$pdoFetch->addTime(\'Conditions prepared\');

// Fields to select
$resourceColumns = array_keys($modx->getFieldMeta($class));
$field = strtolower($field);
if (in_array($field, $resourceColumns)) {
    $scriptProperties[\'select\'] = array($class => $field);
    $scriptProperties[\'includeTVs\'] = \'\';
} elseif ($isResource) {
    $scriptProperties[\'select\'] = array($class => \'id\');
    $scriptProperties[\'includeTVs\'] = $field;
}
// Additional default field
if (!empty($default)) {
    $default = strtolower($default);
    if (in_array($default, $resourceColumns)) {
        $scriptProperties[\'select\'][$class] .= \',\' . $default;
    } elseif ($isResource) {
        $scriptProperties[\'includeTVs\'] = empty($scriptProperties[\'includeTVs\'])
            ? $default
            : $scriptProperties[\'includeTVs\'] . \',\' . $default;
    }
}

$scriptProperties[\'disableConditions\'] = true;
if ($row = $pdoFetch->getObject($class, $where, $scriptProperties)) {
    foreach ($row as $k => $v) {
        if (strtolower($k) == $field && $v != \'\') {
            $output = $v;
            break;
        }
    }

    if (empty($output) && !empty($default)) {
        foreach ($row as $k => $v) {
            if (strtolower($k) == $default && $v != \'\') {
                $output = $v;
                break;
            }
        }
    }
}

if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $output);
} else {
    return $output;
}',
          'locked' => false,
          'properties' => 
          array (
            'id' => 
            array (
              'name' => 'id',
              'desc' => 'pdotools_prop_id',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Идентификатор ресурса.',
              'area_trans' => '',
            ),
            'field' => 
            array (
              'name' => 'field',
              'desc' => 'pdotools_prop_field',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => 'pagetitle',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Поле ресурса.',
              'area_trans' => '',
            ),
            'prepareTVs' => 
            array (
              'name' => 'prepareTVs',
              'desc' => 'pdotools_prop_prepareTVs',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '1',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Список ТВ параметров, которые нужно подготовить перед выводом. По умолчанию, установлено в "1", что означает подготовку всех ТВ, указанных в "&includeTVs=``"',
              'area_trans' => '',
            ),
            'processTVs' => 
            array (
              'name' => 'processTVs',
              'desc' => 'pdotools_prop_processTVs',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Список ТВ параметров, которые нужно обработать перед выводом. Если установить в "1" - будут обработаны все ТВ, указанные в "&includeTVs=``". По умолчанию параметр пуст.',
              'area_trans' => '',
            ),
            'where' => 
            array (
              'name' => 'where',
              'desc' => 'pdotools_prop_where',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Массив дополнительных параметров выборки, закодированный в JSON.',
              'area_trans' => '',
            ),
            'context' => 
            array (
              'name' => 'context',
              'desc' => 'pdotools_prop_field_context',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Контекст ресурса, для выборки его родителей. Нужен для работы параметров "&top" и "&topLevel".',
              'area_trans' => '',
            ),
            'top' => 
            array (
              'name' => 'top',
              'desc' => 'pdotools_prop_top',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Выбирает родителя указанного "&id" на уровне "&top".',
              'area_trans' => '',
            ),
            'topLevel' => 
            array (
              'name' => 'topLevel',
              'desc' => 'pdotools_prop_topLevel',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Выбирает родителя указанного "&id" на уровне "&topLevel" от корня контекста.',
              'area_trans' => '',
            ),
            'default' => 
            array (
              'name' => 'default',
              'desc' => 'pdotools_prop_field_default',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Укажите дополнительное поле ресурса, которое вернётся, если "&field" окажется пуст.',
              'area_trans' => '',
            ),
            'output' => 
            array (
              'name' => 'output',
              'desc' => 'pdotools_prop_field_output',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Указанная здесь строка вернётся, если и "&default" и "&field" оказались пустыми.',
              'area_trans' => '',
            ),
            'toPlaceholder' => 
            array (
              'name' => 'toPlaceholder',
              'desc' => 'pdotools_prop_toPlaceholder',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Если не пусто, сниппет сохранит все данные в плейсхолдер с этим именем, вместо вывода не экран.',
              'area_trans' => '',
            ),
            'ultimate' => 
            array (
              'name' => 'ultimate',
              'desc' => 'pdotools_prop_ultimate',
              'type' => 'combo-boolean',
              'options' => 
              array (
              ),
              'value' => false,
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Параметры &top и &topLevel работают как в сниппете UltimateParent.',
              'area_trans' => '',
            ),
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => 'core/components/pdotools/elements/snippets/snippet.pdofield.php',
          'content' => '/** @var array $scriptProperties */
if (!empty($input)) {
    $id = $input;
}
if (!isset($default)) {
    $default = \'\';
}
if (!isset($output)) {
    $output = \'\';
}
$class = $modx->getOption(\'class\', $scriptProperties, \'modResource\', true);
$isResource = $class == \'modResource\' || in_array($class, $modx->getDescendants(\'modResource\'));

if (empty($field)) {
    $field = \'pagetitle\';
}
$top = isset($top) ? intval($top) : 0;
$topLevel = isset($topLevel) ? intval($topLevel) : 0;
if (!empty($options)) {
    $options = trim($options);
    if ($options[0] == \'{\') {
        $tmp = $modx->fromJSON($options);
        if (is_array($tmp)) {
            extract($tmp);
            $scriptProperties = array_merge($scriptProperties, $tmp);
        }
    } else {
        $field = $options;
    }
}
if (empty($id)) {
    if (!empty($modx->resource)) {
        $id = $modx->resource->id;
    } else {
        return \'You must specify an id of \' . $class;
    }
}
if (!isset($context)) {
    $context = \'\';
}

// Gets the parent from root of context, if specified
if ($isResource && $id && ($top || $topLevel)) {
    // Select needed context for parents functionality
    if (empty($context)) {
        $q = $modx->newQuery($class, $id);
        $q->select(\'context_key\');
        $tstart = microtime(true);
        if ($q->prepare() && $q->stmt->execute()) {
            $modx->queryTime += microtime(true) - $tstart;
            $modx->executedQueries++;
            $context = $q->stmt->fetch(PDO::FETCH_COLUMN);
        }
    }
    // Original pdoField logic
    if (empty($ultimate)) {
        if ($topLevel) {
            $pids = $modx->getChildIds(0, $topLevel, array(\'context\' => $context));
            $pid = $id;
            while (true) {
                $tmp = $modx->getParentIds($pid, 1, array(\'context\' => $context));
                if (!$pid = current($tmp)) {
                    break;
                } elseif (in_array($pid, $pids)) {
                    $id = $pid;
                    break;
                }
            }
        } elseif ($top) {
            $pid = $id;
            for ($i = 1; $i <= $top; $i++) {
                $tmp = $modx->getParentIds($pid, 1, array(\'context\' => $context));
                if (!$pid = current($tmp)) {
                    break;
                }
                $id = $pid;
            }
        }
    }
    // UltimateParent logic
    // https://github.com/splittingred/UltimateParent/blob/develop/core/components/ultimateparent/snippet.ultimateparent.php
    elseif ($id != $top) {
        $pid = $id;
        $pids = $modx->getParentIds($id, 10, array(\'context\' => $context));
        if (!$topLevel || count($pids) >= $topLevel) {
            while ($parentIds = $modx->getParentIds($id, 1, array(\'context\' => $context))) {
                $pid = array_pop($parentIds);
                if ($pid == $top) {
                    break;
                }
                $id = $pid;
                $parentIds = $modx->getParentIds($id, 10, array(\'context\' => $context));
                if ($topLevel && count($parentIds) < $topLevel) {
                    break;
                }
            }
        }
    }
}

/** @var pdoFetch $pdoFetch */
$fqn = $modx->getOption(\'pdoFetch.class\', null, \'pdotools.pdofetch\', true);
$path = $modx->getOption(\'pdofetch_class_path\', null, MODX_CORE_PATH . \'components/pdotools/model/\', true);
if ($pdoClass = $modx->loadClass($fqn, $path, false, true)) {
    $pdoFetch = new $pdoClass($modx, $scriptProperties);
} else {
    return false;
}
$pdoFetch->addTime(\'pdoTools loaded\');

$where = array($class . \'.id\' => $id);
// Add custom parameters
foreach (array(\'where\') as $v) {
    if (!empty($scriptProperties[$v])) {
        $tmp = $modx->fromJSON($scriptProperties[$v]);
        if (is_array($tmp)) {
            $$v = array_merge($$v, $tmp);
        }
    }
    unset($scriptProperties[$v]);
}
$pdoFetch->addTime(\'Conditions prepared\');

// Fields to select
$resourceColumns = array_keys($modx->getFieldMeta($class));
$field = strtolower($field);
if (in_array($field, $resourceColumns)) {
    $scriptProperties[\'select\'] = array($class => $field);
    $scriptProperties[\'includeTVs\'] = \'\';
} elseif ($isResource) {
    $scriptProperties[\'select\'] = array($class => \'id\');
    $scriptProperties[\'includeTVs\'] = $field;
}
// Additional default field
if (!empty($default)) {
    $default = strtolower($default);
    if (in_array($default, $resourceColumns)) {
        $scriptProperties[\'select\'][$class] .= \',\' . $default;
    } elseif ($isResource) {
        $scriptProperties[\'includeTVs\'] = empty($scriptProperties[\'includeTVs\'])
            ? $default
            : $scriptProperties[\'includeTVs\'] . \',\' . $default;
    }
}

$scriptProperties[\'disableConditions\'] = true;
if ($row = $pdoFetch->getObject($class, $where, $scriptProperties)) {
    foreach ($row as $k => $v) {
        if (strtolower($k) == $field && $v != \'\') {
            $output = $v;
            break;
        }
    }

    if (empty($output) && !empty($default)) {
        foreach ($row as $k => $v) {
            if (strtolower($k) == $default && $v != \'\') {
                $output = $v;
                break;
            }
        }
    }
}

if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $output);
} else {
    return $output;
}',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
      'msOrder' => 
      array (
        'fields' => 
        array (
          'id' => 6,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'msOrder',
          'description' => '',
          'editor_type' => 0,
          'category' => 1,
          'cache_type' => 0,
          'snippet' => '/* @var array $scriptProperties */
/* @var miniShop2 $miniShop2 */
$miniShop2 = $modx->getService(\'minishop2\');
$miniShop2->initialize($modx->context->key);
/* @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {return false;}
$pdoFetch = new pdoFetch($modx, $scriptProperties);
$pdoFetch->addTime(\'pdoTools loaded.\');

if (!empty($_GET[\'msorder\'])) {
	if ($order = $modx->getObject(\'msOrder\', $_GET[\'msorder\'])) {
		if ((!empty($_SESSION[\'minishop2\'][\'orders\']) && in_array($_GET[\'msorder\'], $_SESSION[\'minishop2\'][\'orders\'])) || $order->get(\'user_id\') == $modx->user->id || $modx->context->key == \'mgr\') {
			if (empty($tplSuccess)) {$tplSuccess = \'tpl.msOrder.success\';}
			return $pdoFetch->getChunk($tplSuccess, array(\'id\' => $_GET[\'msorder\']));
		}
	}
}

$cart = $miniShop2->cart->get();
$status = $miniShop2->cart->status();
$order = $miniShop2->order->get();
if (empty($status[\'total_count\'])) {
	return !empty($tplEmpty) ? $pdoFetch->getChunk($tplEmpty) : \'\';
}

$deliveryColumns = $modx->getSelectColumns(\'msDelivery\', \'msDelivery\', \'delivery_\');
$paymentColumns = $modx->getSelectColumns(\'msPayment\', \'msPayment\', \'payment_\');

// Default parameters
$default = array(
	\'class\' => \'msDelivery\'
	,\'where\' => \'{"active":1}\'
	,\'select\' => \'{"msDelivery":"all"}\'
	,\'sortby\' => \'rank\'
	,\'sortdir\' => \'ASC\'
	,\'return\' => \'data\'
	,\'fastMode\' => false
	,\'nestedChunkPrefix\' => \'minishop2_\'
);

// Merge all properties and run!
$pdoFetch->addTime(\'Query parameters are prepared.\');
$pdoFetch->setConfig(array_merge($default, $scriptProperties));
$deliveries = $pdoFetch->run();
$pdoFetch->addTime(\'Fetched deliveries.\');

$arrays = array(\'deliveries\' => array(),\'payments\' => array());
if (!empty($deliveries)) {
	foreach ($deliveries as $di => $delivery) {
		$did = $delivery[\'id\'];
		if (empty($order[\'delivery\']) && $di == 0) {
			$miniShop2->order->add(\'delivery\', $did);
			$order = $miniShop2->order->get();
		}

		$delivery[\'payments\'] = array();
		$pdoFetch->config = array_merge($pdoFetch->config, array(
			\'class\' => \'msPayment\'
			,\'innerJoin\' => \'[{"class":"msDeliveryMember","alias":"Member","on":"Member.delivery_id=\'.$delivery[\'id\'].\' AND Member.payment_id=msPayment.id"}]\'
			,\'select\' => \'{"msPayment":"all"}\'
		));
		$pdoFetch->addTime(\'Fetched payments for delivery \'.$delivery[\'name\'].\'.\');
		$payments = $pdoFetch->run();
		if (!empty($payments)) {
			foreach ($payments as $pi => $payment) {
				$pdoFetch->addTime(\'Processing payment \'.$payment[\'name\'].\'.\');
				$pid = $payment[\'id\'];
				if (empty($order[\'payment\']) && $pi == 0) {
					$miniShop2->order->add(\'payment\', $pid);
					$order = $miniShop2->order->get();
				}
				if (!array_key_exists($pid, $arrays[\'payments\'])) {
					$payment[\'checked\'] = !empty($order[\'payment\']) && $order[\'payment\'] == $pid ? \'checked\' : \'\';
					$arrays[\'payments\'][$pid] = empty($tplPayment)
						? $pdoFetch->getChunk(\'\', $payment)
						: $pdoFetch->getChunk($tplPayment, $payment);
				}
				$delivery[\'payments\'][] = $pid;
			}
		}

		$pdoFetch->addTime(\'Processing delivery \'.$delivery[\'name\'].\'.\');
		$delivery[\'checked\'] = !empty($order[\'delivery\']) && $order[\'delivery\'] == $did ? \'checked\' : \'\';
		$delivery[\'payments\'] = $modx->toJSON($delivery[\'payments\']);
		$arrays[\'deliveries\'][$did] = empty($tplDelivery)
			? $pdoFetch->getChunk(\'\', $delivery)
			: $pdoFetch->getChunk($tplDelivery, $delivery);
	}
}

$order_cost = $miniShop2->order->getcost();
$deliveries = implode(\'\', $arrays[\'deliveries\']);
$payments = implode(\'\', $arrays[\'payments\']);
$form = array(
	\'deliveries\' => $deliveries
	,\'payments\' => $payments
	,\'order_cost\' => $miniShop2->formatPrice($order_cost[\'data\'][\'cost\'])
);

// Setting user fields
if ($isAuthenticated = $modx->user->isAuthenticated()) {
	$profile = $modx->user->Profile->toArray();
}
$user_fields = array(
	\'receiver\' => \'fullname\',
	\'phone\' => \'phone\',
	\'email\' => \'email\',
	\'comment\' => \'extended[comment]\',
	\'index\' => \'zip\',
	\'country\' => \'country\',
	\'region\' => \'state\',
	\'city\' => \'city\',
	\'street\' => \'address\',
	\'building\' => \'extended[building]\',
	\'room\' => \'extended[room]\',
);
foreach ($user_fields as $key => $value) {
	if (!empty($profile) && !empty($value)) {
		if (strpos($value, \'extended\') !== false) {
			$tmp = substr($value, 9, -1);
			$value = !empty($profile[\'extended\'][$tmp])
				? $profile[\'extended\'][$tmp]
				: \'\';
		}
		else {
			$value = $profile[$value];
		}
		$tmp = $miniShop2->order->add($key, $value);
		if ($tmp[\'success\'] && !empty($tmp[\'data\'][$key])) {
			$form[$key] = $tmp[\'data\'][$key];
		}
	}
	if (empty($form[$key]) && !empty($order[$key])) {
		$form[$key] = $order[$key];
		unset($order[$key]);
	}
}
$form = array_merge($order, $form);
$form[\'errors\'] = array();

if (!empty($_POST)) {
	$response = $miniShop2->order->getDeliveryRequiresFields();
	$requires = $response[\'data\'][\'requires\'];

	foreach ($_POST as $field => $val) {
		$validated = $miniShop2->order->validate($field, $val);
		if ((in_array($field, $requires) && empty($validated))) {
			$form[\'errors\'][$field] = \'error\';
		}
	}
}

$output = empty($tplOuter)
	? $pdoFetch->getChunk(\'\', $form)
	: $pdoFetch->getChunk($tplOuter, $form);

if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
	$output .= \'<pre class="msOrderLog">\' . print_r($pdoFetch->getTime(), 1) . \'</pre>\';
}

return $output;',
          'locked' => false,
          'properties' => 
          array (
            'tplOuter' => 
            array (
              'name' => 'tplOuter',
              'desc' => 'ms2_prop_tplOuter',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msOrder.outer',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Обёртка для вывода результатов работы сниппета.',
              'area_trans' => '',
            ),
            'tplPayment' => 
            array (
              'name' => 'tplPayment',
              'desc' => 'ms2_prop_tplPayment',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msOrder.payment',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'ms2_prop_tplPayment',
              'area_trans' => '',
            ),
            'tplDelivery' => 
            array (
              'name' => 'tplDelivery',
              'desc' => 'ms2_prop_tplDelivery',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msOrder.delivery',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'ms2_prop_tplDelivery',
              'area_trans' => '',
            ),
            'tplEmpty' => 
            array (
              'name' => 'tplEmpty',
              'desc' => 'ms2_prop_tplEmpty',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Чанк, который выводится при отсутствии результатов.',
              'area_trans' => '',
            ),
            'tplSuccess' => 
            array (
              'name' => 'tplSuccess',
              'desc' => 'ms2_prop_tplSuccess',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.msOrder.success',
              'lexicon' => 'minishop2:properties',
              'area' => '',
              'desc_trans' => 'Чанк с сообщением об успешной работе сниппета.',
              'area_trans' => '',
            ),
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => 'core/components/minishop2/elements/snippets/snippet.ms_order.php',
          'content' => '/* @var array $scriptProperties */
/* @var miniShop2 $miniShop2 */
$miniShop2 = $modx->getService(\'minishop2\');
$miniShop2->initialize($modx->context->key);
/* @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {return false;}
$pdoFetch = new pdoFetch($modx, $scriptProperties);
$pdoFetch->addTime(\'pdoTools loaded.\');

if (!empty($_GET[\'msorder\'])) {
	if ($order = $modx->getObject(\'msOrder\', $_GET[\'msorder\'])) {
		if ((!empty($_SESSION[\'minishop2\'][\'orders\']) && in_array($_GET[\'msorder\'], $_SESSION[\'minishop2\'][\'orders\'])) || $order->get(\'user_id\') == $modx->user->id || $modx->context->key == \'mgr\') {
			if (empty($tplSuccess)) {$tplSuccess = \'tpl.msOrder.success\';}
			return $pdoFetch->getChunk($tplSuccess, array(\'id\' => $_GET[\'msorder\']));
		}
	}
}

$cart = $miniShop2->cart->get();
$status = $miniShop2->cart->status();
$order = $miniShop2->order->get();
if (empty($status[\'total_count\'])) {
	return !empty($tplEmpty) ? $pdoFetch->getChunk($tplEmpty) : \'\';
}

$deliveryColumns = $modx->getSelectColumns(\'msDelivery\', \'msDelivery\', \'delivery_\');
$paymentColumns = $modx->getSelectColumns(\'msPayment\', \'msPayment\', \'payment_\');

// Default parameters
$default = array(
	\'class\' => \'msDelivery\'
	,\'where\' => \'{"active":1}\'
	,\'select\' => \'{"msDelivery":"all"}\'
	,\'sortby\' => \'rank\'
	,\'sortdir\' => \'ASC\'
	,\'return\' => \'data\'
	,\'fastMode\' => false
	,\'nestedChunkPrefix\' => \'minishop2_\'
);

// Merge all properties and run!
$pdoFetch->addTime(\'Query parameters are prepared.\');
$pdoFetch->setConfig(array_merge($default, $scriptProperties));
$deliveries = $pdoFetch->run();
$pdoFetch->addTime(\'Fetched deliveries.\');

$arrays = array(\'deliveries\' => array(),\'payments\' => array());
if (!empty($deliveries)) {
	foreach ($deliveries as $di => $delivery) {
		$did = $delivery[\'id\'];
		if (empty($order[\'delivery\']) && $di == 0) {
			$miniShop2->order->add(\'delivery\', $did);
			$order = $miniShop2->order->get();
		}

		$delivery[\'payments\'] = array();
		$pdoFetch->config = array_merge($pdoFetch->config, array(
			\'class\' => \'msPayment\'
			,\'innerJoin\' => \'[{"class":"msDeliveryMember","alias":"Member","on":"Member.delivery_id=\'.$delivery[\'id\'].\' AND Member.payment_id=msPayment.id"}]\'
			,\'select\' => \'{"msPayment":"all"}\'
		));
		$pdoFetch->addTime(\'Fetched payments for delivery \'.$delivery[\'name\'].\'.\');
		$payments = $pdoFetch->run();
		if (!empty($payments)) {
			foreach ($payments as $pi => $payment) {
				$pdoFetch->addTime(\'Processing payment \'.$payment[\'name\'].\'.\');
				$pid = $payment[\'id\'];
				if (empty($order[\'payment\']) && $pi == 0) {
					$miniShop2->order->add(\'payment\', $pid);
					$order = $miniShop2->order->get();
				}
				if (!array_key_exists($pid, $arrays[\'payments\'])) {
					$payment[\'checked\'] = !empty($order[\'payment\']) && $order[\'payment\'] == $pid ? \'checked\' : \'\';
					$arrays[\'payments\'][$pid] = empty($tplPayment)
						? $pdoFetch->getChunk(\'\', $payment)
						: $pdoFetch->getChunk($tplPayment, $payment);
				}
				$delivery[\'payments\'][] = $pid;
			}
		}

		$pdoFetch->addTime(\'Processing delivery \'.$delivery[\'name\'].\'.\');
		$delivery[\'checked\'] = !empty($order[\'delivery\']) && $order[\'delivery\'] == $did ? \'checked\' : \'\';
		$delivery[\'payments\'] = $modx->toJSON($delivery[\'payments\']);
		$arrays[\'deliveries\'][$did] = empty($tplDelivery)
			? $pdoFetch->getChunk(\'\', $delivery)
			: $pdoFetch->getChunk($tplDelivery, $delivery);
	}
}

$order_cost = $miniShop2->order->getcost();
$deliveries = implode(\'\', $arrays[\'deliveries\']);
$payments = implode(\'\', $arrays[\'payments\']);
$form = array(
	\'deliveries\' => $deliveries
	,\'payments\' => $payments
	,\'order_cost\' => $miniShop2->formatPrice($order_cost[\'data\'][\'cost\'])
);

// Setting user fields
if ($isAuthenticated = $modx->user->isAuthenticated()) {
	$profile = $modx->user->Profile->toArray();
}
$user_fields = array(
	\'receiver\' => \'fullname\',
	\'phone\' => \'phone\',
	\'email\' => \'email\',
	\'comment\' => \'extended[comment]\',
	\'index\' => \'zip\',
	\'country\' => \'country\',
	\'region\' => \'state\',
	\'city\' => \'city\',
	\'street\' => \'address\',
	\'building\' => \'extended[building]\',
	\'room\' => \'extended[room]\',
);
foreach ($user_fields as $key => $value) {
	if (!empty($profile) && !empty($value)) {
		if (strpos($value, \'extended\') !== false) {
			$tmp = substr($value, 9, -1);
			$value = !empty($profile[\'extended\'][$tmp])
				? $profile[\'extended\'][$tmp]
				: \'\';
		}
		else {
			$value = $profile[$value];
		}
		$tmp = $miniShop2->order->add($key, $value);
		if ($tmp[\'success\'] && !empty($tmp[\'data\'][$key])) {
			$form[$key] = $tmp[\'data\'][$key];
		}
	}
	if (empty($form[$key]) && !empty($order[$key])) {
		$form[$key] = $order[$key];
		unset($order[$key]);
	}
}
$form = array_merge($order, $form);
$form[\'errors\'] = array();

if (!empty($_POST)) {
	$response = $miniShop2->order->getDeliveryRequiresFields();
	$requires = $response[\'data\'][\'requires\'];

	foreach ($_POST as $field => $val) {
		$validated = $miniShop2->order->validate($field, $val);
		if ((in_array($field, $requires) && empty($validated))) {
			$form[\'errors\'][$field] = \'error\';
		}
	}
}

$output = empty($tplOuter)
	? $pdoFetch->getChunk(\'\', $form)
	: $pdoFetch->getChunk($tplOuter, $form);

if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
	$output .= \'<pre class="msOrderLog">\' . print_r($pdoFetch->getTime(), 1) . \'</pre>\';
}

return $output;',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
    ),
    'modTemplateVar' => 
    array (
    ),
  ),
);