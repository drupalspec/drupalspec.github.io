<?php  return array (
  'resourceClass' => 'modDocument',
  'resource' => 
  array (
    'id' => 1,
    'type' => 'document',
    'contentType' => 'text/html',
    'pagetitle' => 'Siana',
    'longtitle' => 'Краски для жизни!',
    'description' => '<span>Декорируй</span><span>Пробуй</span><span>Твори</span>',
    'alias' => 'index',
    'link_attributes' => '',
    'published' => 1,
    'pub_date' => 0,
    'unpub_date' => 0,
    'parent' => 0,
    'isfolder' => 1,
    'introtext' => '',
    'content' => '',
    'richtext' => 1,
    'template' => 1,
    'menuindex' => 0,
    'searchable' => 1,
    'cacheable' => 1,
    'createdby' => 1,
    'createdon' => 1462132780,
    'editedby' => 1,
    'editedon' => 1462135679,
    'deleted' => 0,
    'deletedon' => 0,
    'deletedby' => 0,
    'publishedon' => 0,
    'publishedby' => 0,
    'menutitle' => '',
    'donthit' => 0,
    'privateweb' => 0,
    'privatemgr' => 0,
    'content_dispo' => 0,
    'hidemenu' => 0,
    'class_key' => 'modDocument',
    'context_key' => 'web',
    'content_type' => 1,
    'uri' => 'index/',
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
	<title>Siana - Siana</title>
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
          <div class="info-block"><span>Декорируй</span><span>Пробуй</span><span>Твори</span></div>
          <h1 class="title">Краски для жизни!</h1>
          <div class="product">
            <div id="first" class="item"><a id="item-first" href="javascript:void(0)" onclick="changeItem(\'first\')">
			[[!getResources? &parents=`1` &resources=`-8` &depth=`0`  &tpl=`category_front.tpl` &limit=`20` &includeContent=`1` &includeTVs=`1` &processTVs=`1`]]</a>
              <div class="colors">
                <table>
					[[!getResources? &parents=`2` &tpl=`product_front.tpl` &limit=`20` &includeContent=`1` &sortdir=`ASC`]]
                </table>
              </div>
            </div>
            <div id="last" class="item"><a id="item-last" href="javascript:void(0)" onclick="changeItem(\'last\')">
			[[!getResources? &parents=`1` &resources=`-2` &depth=`0`  &tpl=`category_front.tpl` &limit=`20` &includeContent=`1` &includeTVs=`1` &processTVs=`1` ]]</a>
              <div class="colors">
                <table>
                 [[!getResources? &parents=`8` &tpl=`product_front.tpl` &limit=`20` &includeContent=`1` &sortdir=`ASC`]]
                </table>
              </div>
            </div>
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
<li><a href="mailto:mail@certa.ru">mail@certa.ru</a></li>
          </ul>
        </div>
        <div class="col-2"><a id="modal" href="javascript:void(0)" onclick="openModal()" data-state="0" class="btn">Перезвоните мне!</a></div>
        <div class="col-3">Производство - <a href="http://certa.ru">НПП Спектр</a></div>
      </div>
    </footer>
</div>
    <div id="overlay"></div>
    <div id="modal-form">
   <a href="javascript:void(0)" onclick="openModal()" data-state="0" class="close"></a>
   <div class="call-back">
      [[!FormIt?
      &hooks=`spam,email,redirect`
      &emailTpl=`email_tpl`
      &emailTo=`drupalspec@gmail.com`
      &emailSubject=`Заказ звонка с сайта Siana`
      &validate=`name:required,phone:required`
      ]]
      [[!+fi.error_message:notempty=`
      <p>[[!+fi.error_message]]</p>
      `]]
      <form id="call-back" action="http://siana/" method="post" class="form">
         <h4>Перезвоните мне</h4>
         <input type="text" name="name" placeholder="Ваше имя">
         <input type="text" name="phone" placeholder="Ваш номер телефона">
         <input type="submit" value="Заказать звонок" class="btn submit_button">
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
	<title>Siana - Siana</title>
	<link href="assets/build/css/normalize.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300&amp;subset=latin,cyrillic-ext,cyrillic" rel="stylesheet">
    <link href="assets/build/css/style.css" rel="stylesheet">
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?&amp;sensor=true"></script>
    <script src="assets/build/js/main.js"></script>
',
    '[[$email_phone]]' => '<li>8-800-100-93-21</li>
<li><a href="mailto:mail@certa.ru">mail@certa.ru</a></li>',
    '[[$modal_form]]' => '<div id="modal-form">
   <a href="javascript:void(0)" onclick="openModal()" data-state="0" class="close"></a>
   <div class="call-back">
      [[!FormIt?
      &hooks=`spam,email,redirect`
      &emailTpl=`email_tpl`
      &emailTo=`drupalspec@gmail.com`
      &emailSubject=`Заказ звонка с сайта Siana`
      &validate=`name:required,phone:required`
      ]]
      [[!+fi.error_message:notempty=`
      <p>[[!+fi.error_message]]</p>
      `]]
      <form id="call-back" action="http://siana/" method="post" class="form">
         <h4>Перезвоните мне</h4>
         <input type="text" name="name" placeholder="Ваше имя">
         <input type="text" name="phone" placeholder="Ваш номер телефона">
         <input type="submit" value="Заказать звонок" class="btn submit_button">
      </form>
   </div>
</div>',
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
<li><a href="mailto:mail@certa.ru">mail@certa.ru</a></li>
          </ul>
        </div>
        <div class="col-2"><a id="modal" href="javascript:void(0)" onclick="openModal()" data-state="0" class="btn">Перезвоните мне!</a></div>
        <div class="col-3">Производство - <a href="http://certa.ru">НПП Спектр</a></div>
      </div>
    </footer>
</div>
    <div id="overlay"></div>
    <div id="modal-form">
   <a href="javascript:void(0)" onclick="openModal()" data-state="0" class="close"></a>
   <div class="call-back">
      [[!FormIt?
      &hooks=`spam,email,redirect`
      &emailTpl=`email_tpl`
      &emailTo=`drupalspec@gmail.com`
      &emailSubject=`Заказ звонка с сайта Siana`
      &validate=`name:required,phone:required`
      ]]
      [[!+fi.error_message:notempty=`
      <p>[[!+fi.error_message]]</p>
      `]]
      <form id="call-back" action="http://siana/" method="post" class="form">
         <h4>Перезвоните мне</h4>
         <input type="text" name="name" placeholder="Ваше имя">
         <input type="text" name="phone" placeholder="Ваш номер телефона">
         <input type="submit" value="Заказать звонок" class="btn submit_button">
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
      'email_phone' => 
      array (
        'fields' => 
        array (
          'id' => 39,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'email_phone',
          'description' => '',
          'editor_type' => 0,
          'category' => 0,
          'cache_type' => 0,
          'snippet' => '<li>8-800-100-93-21</li>
<li><a href="mailto:mail@certa.ru">mail@certa.ru</a></li>',
          'locked' => false,
          'properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '<li>8-800-100-93-21</li>
<li><a href="mailto:mail@certa.ru">mail@certa.ru</a></li>',
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
            [[$email_phone]]
          </ul>
        </div>
        <div class="col-2"><a id="modal" href="javascript:void(0)" onclick="openModal()" data-state="0" class="btn">Перезвоните мне!</a></div>
        <div class="col-3">Производство - <a href="http://certa.ru">НПП Спектр</a></div>
      </div>
    </footer>
</div>
    <div id="overlay"></div>
    [[$modal_form]]',
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
            [[$email_phone]]
          </ul>
        </div>
        <div class="col-2"><a id="modal" href="javascript:void(0)" onclick="openModal()" data-state="0" class="btn">Перезвоните мне!</a></div>
        <div class="col-3">Производство - <a href="http://certa.ru">НПП Спектр</a></div>
      </div>
    </footer>
</div>
    <div id="overlay"></div>
    [[$modal_form]]',
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
      'modal_form' => 
      array (
        'fields' => 
        array (
          'id' => 41,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'modal_form',
          'description' => '',
          'editor_type' => 0,
          'category' => 0,
          'cache_type' => 0,
          'snippet' => '<div id="modal-form">
   <a href="javascript:void(0)" onclick="openModal()" data-state="0" class="close"></a>
   <div class="call-back">
      [[!FormIt?
      &hooks=`spam,email,redirect`
      &emailTpl=`email_tpl`
      &emailTo=`drupalspec@gmail.com`
      &emailSubject=`Заказ звонка с сайта Siana`
      &validate=`name:required,phone:required`
      ]]
      [[!+fi.error_message:notempty=`
      <p>[[!+fi.error_message]]</p>
      `]]
      <form id="call-back" action="[[~[[*id]]]]" method="post" class="form">
         <h4>Перезвоните мне</h4>
         <input type="text" name="name" placeholder="Ваше имя">
         <input type="text" name="phone" placeholder="Ваш номер телефона">
         <input type="submit" value="Заказать звонок" class="btn submit_button">
      </form>
   </div>
</div>',
          'locked' => false,
          'properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '<div id="modal-form">
   <a href="javascript:void(0)" onclick="openModal()" data-state="0" class="close"></a>
   <div class="call-back">
      [[!FormIt?
      &hooks=`spam,email,redirect`
      &emailTpl=`email_tpl`
      &emailTo=`drupalspec@gmail.com`
      &emailSubject=`Заказ звонка с сайта Siana`
      &validate=`name:required,phone:required`
      ]]
      [[!+fi.error_message:notempty=`
      <p>[[!+fi.error_message]]</p>
      `]]
      <form id="call-back" action="[[~[[*id]]]]" method="post" class="form">
         <h4>Перезвоните мне</h4>
         <input type="text" name="name" placeholder="Ваше имя">
         <input type="text" name="phone" placeholder="Ваш номер телефона">
         <input type="submit" value="Заказать звонок" class="btn submit_button">
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
          'snippet' => '<div class="cart"><span class="ms2_total_count">[[+total_count]]</span> товаров</div>
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
          'content' => '<div class="cart"><span class="ms2_total_count">[[+total_count]]</span> товаров</div>
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
      'getResources' => 
      array (
        'fields' => 
        array (
          'id' => 29,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'getResources',
          'description' => '<strong>1.6.1-pl</strong> A general purpose Resource listing and summarization snippet for MODX Revolution',
          'editor_type' => 0,
          'category' => 0,
          'cache_type' => 0,
          'snippet' => '/**
 * getResources
 *
 * A general purpose Resource listing and summarization snippet for MODX 2.x.
 *
 * @author Jason Coward
 * @copyright Copyright 2010-2013, Jason Coward
 *
 * TEMPLATES
 *
 * tpl - Name of a chunk serving as a resource template
 * [NOTE: if not provided, properties are dumped to output for each resource]
 *
 * tplOdd - (Opt) Name of a chunk serving as resource template for resources with an odd idx value
 * (see idx property)
 * tplFirst - (Opt) Name of a chunk serving as resource template for the first resource (see first
 * property)
 * tplLast - (Opt) Name of a chunk serving as resource template for the last resource (see last
 * property)
 * tpl_{n} - (Opt) Name of a chunk serving as resource template for the nth resource
 *
 * tplCondition - (Opt) Defines a field of the resource to evaluate against keys defined in the
 * conditionalTpls property. Must be a resource field; does not work with Template Variables.
 * conditionalTpls - (Opt) A JSON object defining a map of field values and the associated tpl to
 * use when the field defined by tplCondition matches the value. [NOTE: tplOdd, tplFirst, tplLast,
 * and tpl_{n} will take precedence over any defined conditionalTpls]
 *
 * tplWrapper - (Opt) Name of a chunk serving as a wrapper template for the output
 * [NOTE: Does not work with toSeparatePlaceholders]
 *
 * SELECTION
 *
 * parents - Comma-delimited list of ids serving as parents
 *
 * context - (Opt) Comma-delimited list of context keys to limit results by; if empty, contexts for all specified
 * parents will be used (all contexts if 0 is specified) [default=]
 *
 * depth - (Opt) Integer value indicating depth to search for resources from each parent [default=10]
 *
 * tvFilters - (Opt) Delimited-list of TemplateVar values to filter resources by. Supports two
 * delimiters and two value search formats. The first delimiter || represents a logical OR and the
 * primary grouping mechanism.  Within each group you can provide a comma-delimited list of values.
 * These values can be either tied to a specific TemplateVar by name, e.g. myTV==value, or just the
 * value, indicating you are searching for the value in any TemplateVar tied to the Resource. An
 * example would be &tvFilters=`filter2==one,filter1==bar%||filter1==foo`
 * [NOTE: filtering by values uses a LIKE query and % is considered a wildcard.]
 * [NOTE: this only looks at the raw value set for specific Resource, i. e. there must be a value
 * specifically set for the Resource and it is not evaluated.]
 *
 * tvFiltersAndDelimiter - (Opt) Custom delimiter for logical AND, default \',\', in case you want to
 * match a literal comma in the tvFilters. E.g. &tvFiltersAndDelimiter=`&&`
 * &tvFilters=`filter1==foo,bar&&filter2==baz` [default=,]
 *
 * tvFiltersOrDelimiter - (Opt) Custom delimiter for logical OR, default \'||\', in case you want to
 * match a literal \'||\' in the tvFilters. E.g. &tvFiltersOrDelimiter=`|OR|`
 * &tvFilters=`filter1==foo||bar|OR|filter2==baz` [default=||]
 *
 * where - (Opt) A JSON expression of criteria to build any additional where clauses from. An example would be
 * &where=`{{"alias:LIKE":"foo%", "OR:alias:LIKE":"%bar"},{"OR:pagetitle:=":"foobar", "AND:description:=":"raboof"}}`
 *
 * sortby - (Opt) Field to sort by or a JSON array, e.g. {"publishedon":"ASC","createdon":"DESC"} [default=publishedon]
 * sortbyTV - (opt) A Template Variable name to sort by (if supplied, this precedes the sortby value) [default=]
 * sortbyTVType - (Opt) A data type to CAST a TV Value to in order to sort on it properly [default=string]
 * sortbyAlias - (Opt) Query alias for sortby field [default=]
 * sortbyEscaped - (Opt) Escapes the field name(s) specified in sortby [default=0]
 * sortdir - (Opt) Order which to sort by [default=DESC]
 * sortdirTV - (Opt) Order which to sort by a TV [default=DESC]
 * limit - (Opt) Limits the number of resources returned [default=5]
 * offset - (Opt) An offset of resources returned by the criteria to skip [default=0]
 * dbCacheFlag - (Opt) Controls caching of db queries; 0|false = do not cache result set; 1 = cache result set
 * according to cache settings, any other integer value = number of seconds to cache result set [default=0]
 *
 * OPTIONS
 *
 * includeContent - (Opt) Indicates if the content of each resource should be returned in the
 * results [default=0]
 * includeTVs - (Opt) Indicates if TemplateVar values should be included in the properties available
 * to each resource template [default=0]
 * includeTVList - (Opt) Limits the TemplateVars that are included if includeTVs is true to those specified
 * by name in a comma-delimited list [default=]
 * prepareTVs - (Opt) Prepares media-source dependent TemplateVar values [default=1]
 * prepareTVList - (Opt) Limits the TVs that are prepared to those specified by name in a comma-delimited
 * list [default=]
 * processTVs - (Opt) Indicates if TemplateVar values should be rendered as they would on the
 * resource being summarized [default=0]
 * processTVList - (opt) Limits the TemplateVars that are processed if included to those specified
 * by name in a comma-delimited list [default=]
 * tvPrefix - (Opt) The prefix for TemplateVar properties [default=tv.]
 * idx - (Opt) You can define the starting idx of the resources, which is an property that is
 * incremented as each resource is rendered [default=1]
 * first - (Opt) Define the idx which represents the first resource (see tplFirst) [default=1]
 * last - (Opt) Define the idx which represents the last resource (see tplLast) [default=# of
 * resources being summarized + first - 1]
 * outputSeparator - (Opt) An optional string to separate each tpl instance [default="\\n"]
 * wrapIfEmpty - (Opt) Indicates if the tplWrapper should be applied if the output is empty [default=0]
 *
 */
$output = array();
$outputSeparator = isset($outputSeparator) ? $outputSeparator : "\\n";

/* set default properties */
$tpl = !empty($tpl) ? $tpl : \'\';
$includeContent = !empty($includeContent) ? true : false;
$includeTVs = !empty($includeTVs) ? true : false;
$includeTVList = !empty($includeTVList) ? explode(\',\', $includeTVList) : array();
$processTVs = !empty($processTVs) ? true : false;
$processTVList = !empty($processTVList) ? explode(\',\', $processTVList) : array();
$prepareTVs = !empty($prepareTVs) ? true : false;
$prepareTVList = !empty($prepareTVList) ? explode(\',\', $prepareTVList) : array();
$tvPrefix = isset($tvPrefix) ? $tvPrefix : \'tv.\';
$parents = (!empty($parents) || $parents === \'0\') ? explode(\',\', $parents) : array($modx->resource->get(\'id\'));
array_walk($parents, \'trim\');
$parents = array_unique($parents);
$depth = isset($depth) ? (integer) $depth : 10;

$tvFiltersOrDelimiter = isset($tvFiltersOrDelimiter) ? $tvFiltersOrDelimiter : \'||\';
$tvFiltersAndDelimiter = isset($tvFiltersAndDelimiter) ? $tvFiltersAndDelimiter : \',\';
$tvFilters = !empty($tvFilters) ? explode($tvFiltersOrDelimiter, $tvFilters) : array();

$where = !empty($where) ? $modx->fromJSON($where) : array();
$showUnpublished = !empty($showUnpublished) ? true : false;
$showDeleted = !empty($showDeleted) ? true : false;

$sortby = isset($sortby) ? $sortby : \'publishedon\';
$sortbyTV = isset($sortbyTV) ? $sortbyTV : \'\';
$sortbyAlias = isset($sortbyAlias) ? $sortbyAlias : \'modResource\';
$sortbyEscaped = !empty($sortbyEscaped) ? true : false;
$sortdir = isset($sortdir) ? $sortdir : \'DESC\';
$sortdirTV = isset($sortdirTV) ? $sortdirTV : \'DESC\';
$limit = isset($limit) ? (integer) $limit : 5;
$offset = isset($offset) ? (integer) $offset : 0;
$totalVar = !empty($totalVar) ? $totalVar : \'total\';

$dbCacheFlag = !isset($dbCacheFlag) ? false : $dbCacheFlag;
if (is_string($dbCacheFlag) || is_numeric($dbCacheFlag)) {
    if ($dbCacheFlag == \'0\') {
        $dbCacheFlag = false;
    } elseif ($dbCacheFlag == \'1\') {
        $dbCacheFlag = true;
    } else {
        $dbCacheFlag = (integer) $dbCacheFlag;
    }
}

/* multiple context support */
$contextArray = array();
$contextSpecified = false;
if (!empty($context)) {
    $contextArray = explode(\',\',$context);
    array_walk($contextArray, \'trim\');
    $contexts = array();
    foreach ($contextArray as $ctx) {
        $contexts[] = $modx->quote($ctx);
    }
    $context = implode(\',\',$contexts);
    $contextSpecified = true;
    unset($contexts,$ctx);
} else {
    $context = $modx->quote($modx->context->get(\'key\'));
}

$pcMap = array();
$pcQuery = $modx->newQuery(\'modResource\', array(\'id:IN\' => $parents), $dbCacheFlag);
$pcQuery->select(array(\'id\', \'context_key\'));
if ($pcQuery->prepare() && $pcQuery->stmt->execute()) {
    foreach ($pcQuery->stmt->fetchAll(PDO::FETCH_ASSOC) as $pcRow) {
        $pcMap[(integer) $pcRow[\'id\']] = $pcRow[\'context_key\'];
    }
}

$children = array();
$parentArray = array();
foreach ($parents as $parent) {
    $parent = (integer) $parent;
    if ($parent === 0) {
        $pchildren = array();
        if ($contextSpecified) {
            foreach ($contextArray as $pCtx) {
                if (!in_array($pCtx, $contextArray)) {
                    continue;
                }
                $options = $pCtx !== $modx->context->get(\'key\') ? array(\'context\' => $pCtx) : array();
                $pcchildren = $modx->getChildIds($parent, $depth, $options);
                if (!empty($pcchildren)) $pchildren = array_merge($pchildren, $pcchildren);
            }
        } else {
            $cQuery = $modx->newQuery(\'modContext\', array(\'key:!=\' => \'mgr\'));
            $cQuery->select(array(\'key\'));
            if ($cQuery->prepare() && $cQuery->stmt->execute()) {
                foreach ($cQuery->stmt->fetchAll(PDO::FETCH_COLUMN) as $pCtx) {
                    $options = $pCtx !== $modx->context->get(\'key\') ? array(\'context\' => $pCtx) : array();
                    $pcchildren = $modx->getChildIds($parent, $depth, $options);
                    if (!empty($pcchildren)) $pchildren = array_merge($pchildren, $pcchildren);
                }
            }
        }
        $parentArray[] = $parent;
    } else {
        $pContext = array_key_exists($parent, $pcMap) ? $pcMap[$parent] : false;
        if ($debug) $modx->log(modX::LOG_LEVEL_ERROR, "context for {$parent} is {$pContext}");
        if ($pContext && $contextSpecified && !in_array($pContext, $contextArray, true)) {
            $parent = next($parents);
            continue;
        }
        $parentArray[] = $parent;
        $options = !empty($pContext) && $pContext !== $modx->context->get(\'key\') ? array(\'context\' => $pContext) : array();
        $pchildren = $modx->getChildIds($parent, $depth, $options);
    }
    if (!empty($pchildren)) $children = array_merge($children, $pchildren);
    $parent = next($parents);
}
$parents = array_merge($parentArray, $children);

/* build query */
$criteria = array("modResource.parent IN (" . implode(\',\', $parents) . ")");
if ($contextSpecified) {
    $contextResourceTbl = $modx->getTableName(\'modContextResource\');
    $criteria[] = "(modResource.context_key IN ({$context}) OR EXISTS(SELECT 1 FROM {$contextResourceTbl} ctx WHERE ctx.resource = modResource.id AND ctx.context_key IN ({$context})))";
}
if (empty($showDeleted)) {
    $criteria[\'deleted\'] = \'0\';
}
if (empty($showUnpublished)) {
    $criteria[\'published\'] = \'1\';
}
if (empty($showHidden)) {
    $criteria[\'hidemenu\'] = \'0\';
}
if (!empty($hideContainers)) {
    $criteria[\'isfolder\'] = \'0\';
}
$criteria = $modx->newQuery(\'modResource\', $criteria);
if (!empty($tvFilters)) {
    $tmplVarTbl = $modx->getTableName(\'modTemplateVar\');
    $tmplVarResourceTbl = $modx->getTableName(\'modTemplateVarResource\');
    $conditions = array();
    $operators = array(
        \'<=>\' => \'<=>\',
        \'===\' => \'=\',
        \'!==\' => \'!=\',
        \'<>\' => \'<>\',
        \'==\' => \'LIKE\',
        \'!=\' => \'NOT LIKE\',
        \'<<\' => \'<\',
        \'<=\' => \'<=\',
        \'=<\' => \'=<\',
        \'>>\' => \'>\',
        \'>=\' => \'>=\',
        \'=>\' => \'=>\'
    );
    foreach ($tvFilters as $fGroup => $tvFilter) {
        $filterGroup = array();
        $filters = explode($tvFiltersAndDelimiter, $tvFilter);
        $multiple = count($filters) > 0;
        foreach ($filters as $filter) {
            $operator = \'==\';
            $sqlOperator = \'LIKE\';
            foreach ($operators as $op => $opSymbol) {
                if (strpos($filter, $op, 1) !== false) {
                    $operator = $op;
                    $sqlOperator = $opSymbol;
                    break;
                }
            }
            $tvValueField = \'tvr.value\';
            $tvDefaultField = \'tv.default_text\';
            $f = explode($operator, $filter);
            if (count($f) >= 2) {
                if (count($f) > 2) {
                    $k = array_shift($f);
                    $b = join($operator, $f);
                    $f = array($k, $b);
                }
                $tvName = $modx->quote($f[0]);
                if (is_numeric($f[1]) && !in_array($sqlOperator, array(\'LIKE\', \'NOT LIKE\'))) {
                    $tvValue = $f[1];
                    if ($f[1] == (integer)$f[1]) {
                        $tvValueField = "CAST({$tvValueField} AS SIGNED INTEGER)";
                        $tvDefaultField = "CAST({$tvDefaultField} AS SIGNED INTEGER)";
                    } else {
                        $tvValueField = "CAST({$tvValueField} AS DECIMAL)";
                        $tvDefaultField = "CAST({$tvDefaultField} AS DECIMAL)";
                    }
                } else {
                    $tvValue = $modx->quote($f[1]);
                }
                if ($multiple) {
                    $filterGroup[] =
                        "(EXISTS (SELECT 1 FROM {$tmplVarResourceTbl} tvr JOIN {$tmplVarTbl} tv ON {$tvValueField} {$sqlOperator} {$tvValue} AND tv.name = {$tvName} AND tv.id = tvr.tmplvarid WHERE tvr.contentid = modResource.id) " .
                        "OR EXISTS (SELECT 1 FROM {$tmplVarTbl} tv WHERE tv.name = {$tvName} AND {$tvDefaultField} {$sqlOperator} {$tvValue} AND tv.id NOT IN (SELECT tmplvarid FROM {$tmplVarResourceTbl} WHERE contentid = modResource.id)) " .
                        ")";
                } else {
                    $filterGroup =
                        "(EXISTS (SELECT 1 FROM {$tmplVarResourceTbl} tvr JOIN {$tmplVarTbl} tv ON {$tvValueField} {$sqlOperator} {$tvValue} AND tv.name = {$tvName} AND tv.id = tvr.tmplvarid WHERE tvr.contentid = modResource.id) " .
                        "OR EXISTS (SELECT 1 FROM {$tmplVarTbl} tv WHERE tv.name = {$tvName} AND {$tvDefaultField} {$sqlOperator} {$tvValue} AND tv.id NOT IN (SELECT tmplvarid FROM {$tmplVarResourceTbl} WHERE contentid = modResource.id)) " .
                        ")";
                }
            } elseif (count($f) == 1) {
                $tvValue = $modx->quote($f[0]);
                if ($multiple) {
                    $filterGroup[] = "EXISTS (SELECT 1 FROM {$tmplVarResourceTbl} tvr JOIN {$tmplVarTbl} tv ON {$tvValueField} {$sqlOperator} {$tvValue} AND tv.id = tvr.tmplvarid WHERE tvr.contentid = modResource.id)";
                } else {
                    $filterGroup = "EXISTS (SELECT 1 FROM {$tmplVarResourceTbl} tvr JOIN {$tmplVarTbl} tv ON {$tvValueField} {$sqlOperator} {$tvValue} AND tv.id = tvr.tmplvarid WHERE tvr.contentid = modResource.id)";
                }
            }
        }
        $conditions[] = $filterGroup;
    }
    if (!empty($conditions)) {
        $firstGroup = true;
        foreach ($conditions as $cGroup => $c) {
            if (is_array($c)) {
                $first = true;
                foreach ($c as $cond) {
                    if ($first && !$firstGroup) {
                        $criteria->condition($criteria->query[\'where\'][0][1], $cond, xPDOQuery::SQL_OR, null, $cGroup);
                    } else {
                        $criteria->condition($criteria->query[\'where\'][0][1], $cond, xPDOQuery::SQL_AND, null, $cGroup);
                    }
                    $first = false;
                }
            } else {
                $criteria->condition($criteria->query[\'where\'][0][1], $c, $firstGroup ? xPDOQuery::SQL_AND : xPDOQuery::SQL_OR, null, $cGroup);
            }
            $firstGroup = false;
        }
    }
}
/* include/exclude resources, via &resources=`123,-456` prop */
if (!empty($resources)) {
    $resourceConditions = array();
    $resources = explode(\',\',$resources);
    $include = array();
    $exclude = array();
    foreach ($resources as $resource) {
        $resource = (int)$resource;
        if ($resource == 0) continue;
        if ($resource < 0) {
            $exclude[] = abs($resource);
        } else {
            $include[] = $resource;
        }
    }
    if (!empty($include)) {
        $criteria->where(array(\'OR:modResource.id:IN\' => $include), xPDOQuery::SQL_OR);
    }
    if (!empty($exclude)) {
        $criteria->where(array(\'modResource.id:NOT IN\' => $exclude), xPDOQuery::SQL_AND, null, 1);
    }
}
if (!empty($where)) {
    $criteria->where($where);
}

$total = $modx->getCount(\'modResource\', $criteria);
$modx->setPlaceholder($totalVar, $total);

$fields = array_keys($modx->getFields(\'modResource\'));
if (empty($includeContent)) {
    $fields = array_diff($fields, array(\'content\'));
}
$columns = $includeContent ? $modx->getSelectColumns(\'modResource\', \'modResource\') : $modx->getSelectColumns(\'modResource\', \'modResource\', \'\', array(\'content\'), true);
$criteria->select($columns);
if (!empty($sortbyTV)) {
    $criteria->leftJoin(\'modTemplateVar\', \'tvDefault\', array(
        "tvDefault.name" => $sortbyTV
    ));
    $criteria->leftJoin(\'modTemplateVarResource\', \'tvSort\', array(
        "tvSort.contentid = modResource.id",
        "tvSort.tmplvarid = tvDefault.id"
    ));
    if (empty($sortbyTVType)) $sortbyTVType = \'string\';
    if ($modx->getOption(\'dbtype\') === \'mysql\') {
        switch ($sortbyTVType) {
            case \'integer\':
                $criteria->select("CAST(IFNULL(tvSort.value, tvDefault.default_text) AS SIGNED INTEGER) AS sortTV");
                break;
            case \'decimal\':
                $criteria->select("CAST(IFNULL(tvSort.value, tvDefault.default_text) AS DECIMAL) AS sortTV");
                break;
            case \'datetime\':
                $criteria->select("CAST(IFNULL(tvSort.value, tvDefault.default_text) AS DATETIME) AS sortTV");
                break;
            case \'string\':
            default:
                $criteria->select("IFNULL(tvSort.value, tvDefault.default_text) AS sortTV");
                break;
        }
    } elseif ($modx->getOption(\'dbtype\') === \'sqlsrv\') {
        switch ($sortbyTVType) {
            case \'integer\':
                $criteria->select("CAST(ISNULL(tvSort.value, tvDefault.default_text) AS BIGINT) AS sortTV");
                break;
            case \'decimal\':
                $criteria->select("CAST(ISNULL(tvSort.value, tvDefault.default_text) AS DECIMAL) AS sortTV");
                break;
            case \'datetime\':
                $criteria->select("CAST(ISNULL(tvSort.value, tvDefault.default_text) AS DATETIME) AS sortTV");
                break;
            case \'string\':
            default:
                $criteria->select("ISNULL(tvSort.value, tvDefault.default_text) AS sortTV");
                break;
        }
    }
    $criteria->sortby("sortTV", $sortdirTV);
}
if (!empty($sortby)) {
    if (strpos($sortby, \'{\') === 0) {
        $sorts = $modx->fromJSON($sortby);
    } else {
        $sorts = array($sortby => $sortdir);
    }
    if (is_array($sorts)) {
        while (list($sort, $dir) = each($sorts)) {
            if ($sortbyEscaped) $sort = $modx->escape($sort);
            if (!empty($sortbyAlias)) $sort = $modx->escape($sortbyAlias) . ".{$sort}";
            $criteria->sortby($sort, $dir);
        }
    }
}
if (!empty($limit)) $criteria->limit($limit, $offset);

if (!empty($debug)) {
    $criteria->prepare();
    $modx->log(modX::LOG_LEVEL_ERROR, $criteria->toSQL());
}
$collection = $modx->getCollection(\'modResource\', $criteria, $dbCacheFlag);

$idx = !empty($idx) || $idx === \'0\' ? (integer) $idx : 1;
$first = empty($first) && $first !== \'0\' ? 1 : (integer) $first;
$last = empty($last) ? (count($collection) + $idx - 1) : (integer) $last;

/* include parseTpl */
include_once $modx->getOption(\'getresources.core_path\',null,$modx->getOption(\'core_path\').\'components/getresources/\').\'include.parsetpl.php\';

$templateVars = array();
if (!empty($includeTVs) && !empty($includeTVList)) {
    $templateVars = $modx->getCollection(\'modTemplateVar\', array(\'name:IN\' => $includeTVList));
}
/** @var modResource $resource */
foreach ($collection as $resourceId => $resource) {
    $tvs = array();
    if (!empty($includeTVs)) {
        if (empty($includeTVList)) {
            $templateVars = $resource->getMany(\'TemplateVars\');
        }
        /** @var modTemplateVar $templateVar */
        foreach ($templateVars as $tvId => $templateVar) {
            if (!empty($includeTVList) && !in_array($templateVar->get(\'name\'), $includeTVList)) continue;
            if ($processTVs && (empty($processTVList) || in_array($templateVar->get(\'name\'), $processTVList))) {
                $tvs[$tvPrefix . $templateVar->get(\'name\')] = $templateVar->renderOutput($resource->get(\'id\'));
            } else {
                $value = $templateVar->getValue($resource->get(\'id\'));
                if ($prepareTVs && method_exists($templateVar, \'prepareOutput\') && (empty($prepareTVList) || in_array($templateVar->get(\'name\'), $prepareTVList))) {
                    $value = $templateVar->prepareOutput($value);
                }
                $tvs[$tvPrefix . $templateVar->get(\'name\')] = $value;
            }
        }
    }
    $odd = ($idx & 1);
    $properties = array_merge(
        $scriptProperties
        ,array(
            \'idx\' => $idx
            ,\'first\' => $first
            ,\'last\' => $last
            ,\'odd\' => $odd
        )
        ,$includeContent ? $resource->toArray() : $resource->get($fields)
        ,$tvs
    );
    $resourceTpl = false;
    if ($idx == $first && !empty($tplFirst)) {
        $resourceTpl = parseTpl($tplFirst, $properties);
    }
    if ($idx == $last && empty($resourceTpl) && !empty($tplLast)) {
        $resourceTpl = parseTpl($tplLast, $properties);
    }
    $tplidx = \'tpl_\' . $idx;
    if (empty($resourceTpl) && !empty($$tplidx)) {
        $resourceTpl = parseTpl($$tplidx, $properties);
    }
    if ($idx > 1 && empty($resourceTpl)) {
        $divisors = getDivisors($idx);
        if (!empty($divisors)) {
            foreach ($divisors as $divisor) {
                $tplnth = \'tpl_n\' . $divisor;
                if (!empty($$tplnth)) {
                    $resourceTpl = parseTpl($$tplnth, $properties);
                    if (!empty($resourceTpl)) {
                        break;
                    }
                }
            }
        }
    }
    if ($odd && empty($resourceTpl) && !empty($tplOdd)) {
        $resourceTpl = parseTpl($tplOdd, $properties);
    }
    if (!empty($tplCondition) && !empty($conditionalTpls) && empty($resourceTpl)) {
        $conTpls = $modx->fromJSON($conditionalTpls);
        $subject = $properties[$tplCondition];
        $tplOperator = !empty($tplOperator) ? $tplOperator : \'=\';
        $tplOperator = strtolower($tplOperator);
        $tplCon = \'\';
        foreach ($conTpls as $operand => $conditionalTpl) {
            switch ($tplOperator) {
                case \'!=\':
                case \'neq\':
                case \'not\':
                case \'isnot\':
                case \'isnt\':
                case \'unequal\':
                case \'notequal\':
                    $tplCon = (($subject != $operand) ? $conditionalTpl : $tplCon);
                    break;
                case \'<\':
                case \'lt\':
                case \'less\':
                case \'lessthan\':
                    $tplCon = (($subject < $operand) ? $conditionalTpl : $tplCon);
                    break;
                case \'>\':
                case \'gt\':
                case \'greater\':
                case \'greaterthan\':
                    $tplCon = (($subject > $operand) ? $conditionalTpl : $tplCon);
                    break;
                case \'<=\':
                case \'lte\':
                case \'lessthanequals\':
                case \'lessthanorequalto\':
                    $tplCon = (($subject <= $operand) ? $conditionalTpl : $tplCon);
                    break;
                case \'>=\':
                case \'gte\':
                case \'greaterthanequals\':
                case \'greaterthanequalto\':
                    $tplCon = (($subject >= $operand) ? $conditionalTpl : $tplCon);
                    break;
                case \'isempty\':
                case \'empty\':
                    $tplCon = empty($subject) ? $conditionalTpl : $tplCon;
                    break;
                case \'!empty\':
                case \'notempty\':
                case \'isnotempty\':
                    $tplCon = !empty($subject) && $subject != \'\' ? $conditionalTpl : $tplCon;
                    break;
                case \'isnull\':
                case \'null\':
                    $tplCon = $subject == null || strtolower($subject) == \'null\' ? $conditionalTpl : $tplCon;
                    break;
                case \'inarray\':
                case \'in_array\':
                case \'ia\':
                    $operand = explode(\',\', $operand);
                    $tplCon = in_array($subject, $operand) ? $conditionalTpl : $tplCon;
                    break;
                case \'between\':
                case \'range\':
                case \'>=<\':
                case \'><\':
                    $operand = explode(\',\', $operand);
                    $tplCon = ($subject >= min($operand) && $subject <= max($operand)) ? $conditionalTpl : $tplCon;
                    break;
                case \'==\':
                case \'=\':
                case \'eq\':
                case \'is\':
                case \'equal\':
                case \'equals\':
                case \'equalto\':
                default:
                    $tplCon = (($subject == $operand) ? $conditionalTpl : $tplCon);
                    break;
            }
        }
        if (!empty($tplCon)) {
            $resourceTpl = parseTpl($tplCon, $properties);
        }
    }
    if (!empty($tpl) && empty($resourceTpl)) {
        $resourceTpl = parseTpl($tpl, $properties);
    }
    if ($resourceTpl === false && !empty($debug)) {
        $chunk = $modx->newObject(\'modChunk\');
        $chunk->setCacheable(false);
        $output[]= $chunk->process(array(), \'<pre>\' . print_r($properties, true) .\'</pre>\');
    } else {
        $output[]= $resourceTpl;
    }
    $idx++;
}

/* output */
$toSeparatePlaceholders = $modx->getOption(\'toSeparatePlaceholders\', $scriptProperties, false);
if (!empty($toSeparatePlaceholders)) {
    $modx->setPlaceholders($output, $toSeparatePlaceholders);
    return \'\';
}

$output = implode($outputSeparator, $output);

$tplWrapper = $modx->getOption(\'tplWrapper\', $scriptProperties, false);
$wrapIfEmpty = $modx->getOption(\'wrapIfEmpty\', $scriptProperties, false);
if (!empty($tplWrapper) && ($wrapIfEmpty || !empty($output))) {
    $output = parseTpl($tplWrapper, array_merge($scriptProperties, array(\'output\' => $output)));
}

$toPlaceholder = $modx->getOption(\'toPlaceholder\', $scriptProperties, false);
if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $output);
    return \'\';
}
return $output;',
          'locked' => false,
          'properties' => 
          array (
            'tpl' => 
            array (
              'name' => 'tpl',
              'desc' => 'Name of a chunk serving as a resource template. NOTE: if not provided, properties are dumped to output for each resource.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Name of a chunk serving as a resource template. NOTE: if not provided, properties are dumped to output for each resource.',
              'area_trans' => '',
            ),
            'tplOdd' => 
            array (
              'name' => 'tplOdd',
              'desc' => 'Name of a chunk serving as resource template for resources with an odd idx value (see idx property).',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Name of a chunk serving as resource template for resources with an odd idx value (see idx property).',
              'area_trans' => '',
            ),
            'tplFirst' => 
            array (
              'name' => 'tplFirst',
              'desc' => 'Name of a chunk serving as resource template for the first resource (see first property).',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Name of a chunk serving as resource template for the first resource (see first property).',
              'area_trans' => '',
            ),
            'tplLast' => 
            array (
              'name' => 'tplLast',
              'desc' => 'Name of a chunk serving as resource template for the last resource (see last property).',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Name of a chunk serving as resource template for the last resource (see last property).',
              'area_trans' => '',
            ),
            'tplWrapper' => 
            array (
              'name' => 'tplWrapper',
              'desc' => 'Name of a chunk serving as wrapper template for the Snippet output. This does not work with toSeparatePlaceholders.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Name of a chunk serving as wrapper template for the Snippet output. This does not work with toSeparatePlaceholders.',
              'area_trans' => '',
            ),
            'wrapIfEmpty' => 
            array (
              'name' => 'wrapIfEmpty',
              'desc' => 'Indicates if empty output should be wrapped by the tplWrapper, if specified. Defaults to false.',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Indicates if empty output should be wrapped by the tplWrapper, if specified. Defaults to false.',
              'area_trans' => '',
            ),
            'sortby' => 
            array (
              'name' => 'sortby',
              'desc' => 'A field name to sort by or JSON object of field names and sortdir for each field, e.g. {"publishedon":"ASC","createdon":"DESC"}. Defaults to publishedon.',
              'type' => 'textfield',
              'options' => '',
              'value' => 'publishedon',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'A field name to sort by or JSON object of field names and sortdir for each field, e.g. {"publishedon":"ASC","createdon":"DESC"}. Defaults to publishedon.',
              'area_trans' => '',
            ),
            'sortbyTV' => 
            array (
              'name' => 'sortbyTV',
              'desc' => 'Name of a Template Variable to sort by. Defaults to empty string.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Name of a Template Variable to sort by. Defaults to empty string.',
              'area_trans' => '',
            ),
            'sortbyTVType' => 
            array (
              'name' => 'sortbyTVType',
              'desc' => 'An optional type to indicate how to sort on the Template Variable value.',
              'type' => 'list',
              'options' => 
              array (
                0 => 
                array (
                  'text' => 'string',
                  'value' => 'string',
                  'name' => 'string',
                ),
                1 => 
                array (
                  'text' => 'integer',
                  'value' => 'integer',
                  'name' => 'integer',
                ),
                2 => 
                array (
                  'text' => 'decimal',
                  'value' => 'decimal',
                  'name' => 'decimal',
                ),
                3 => 
                array (
                  'text' => 'datetime',
                  'value' => 'datetime',
                  'name' => 'datetime',
                ),
              ),
              'value' => 'string',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'An optional type to indicate how to sort on the Template Variable value.',
              'area_trans' => '',
            ),
            'sortbyAlias' => 
            array (
              'name' => 'sortbyAlias',
              'desc' => 'Query alias for sortby field. Defaults to an empty string.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Query alias for sortby field. Defaults to an empty string.',
              'area_trans' => '',
            ),
            'sortbyEscaped' => 
            array (
              'name' => 'sortbyEscaped',
              'desc' => 'Determines if the field name specified in sortby should be escaped. Defaults to 0.',
              'type' => 'textfield',
              'options' => '',
              'value' => '0',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Determines if the field name specified in sortby should be escaped. Defaults to 0.',
              'area_trans' => '',
            ),
            'sortdir' => 
            array (
              'name' => 'sortdir',
              'desc' => 'Order which to sort by. Defaults to DESC.',
              'type' => 'list',
              'options' => 
              array (
                0 => 
                array (
                  'text' => 'ASC',
                  'value' => 'ASC',
                  'name' => 'ASC',
                ),
                1 => 
                array (
                  'text' => 'DESC',
                  'value' => 'DESC',
                  'name' => 'DESC',
                ),
              ),
              'value' => 'DESC',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Order which to sort by. Defaults to DESC.',
              'area_trans' => '',
            ),
            'sortdirTV' => 
            array (
              'name' => 'sortdirTV',
              'desc' => 'Order which to sort a Template Variable by. Defaults to DESC.',
              'type' => 'list',
              'options' => 
              array (
                0 => 
                array (
                  'text' => 'ASC',
                  'value' => 'ASC',
                  'name' => 'ASC',
                ),
                1 => 
                array (
                  'text' => 'DESC',
                  'value' => 'DESC',
                  'name' => 'DESC',
                ),
              ),
              'value' => 'DESC',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Order which to sort a Template Variable by. Defaults to DESC.',
              'area_trans' => '',
            ),
            'limit' => 
            array (
              'name' => 'limit',
              'desc' => 'Limits the number of resources returned. Defaults to 5.',
              'type' => 'textfield',
              'options' => '',
              'value' => '5',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Limits the number of resources returned. Defaults to 5.',
              'area_trans' => '',
            ),
            'offset' => 
            array (
              'name' => 'offset',
              'desc' => 'An offset of resources returned by the criteria to skip.',
              'type' => 'textfield',
              'options' => '',
              'value' => '0',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'An offset of resources returned by the criteria to skip.',
              'area_trans' => '',
            ),
            'tvFilters' => 
            array (
              'name' => 'tvFilters',
              'desc' => 'Delimited-list of TemplateVar values to filter resources by. Supports two delimiters and two value search formats. THe first delimiter || represents a logical OR and the primary grouping mechanism.  Within each group you can provide a comma-delimited list of values. These values can be either tied to a specific TemplateVar by name, e.g. myTV==value, or just the value, indicating you are searching for the value in any TemplateVar tied to the Resource. An example would be &tvFilters=`filter2==one,filter1==bar%||filter1==foo`. <br />NOTE: filtering by values uses a LIKE query and % is considered a wildcard. <br />ANOTHER NOTE: This only looks at the raw value set for specific Resource, i. e. there must be a value specifically set for the Resource and it is not evaluated.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Delimited-list of TemplateVar values to filter resources by. Supports two delimiters and two value search formats. THe first delimiter || represents a logical OR and the primary grouping mechanism.  Within each group you can provide a comma-delimited list of values. These values can be either tied to a specific TemplateVar by name, e.g. myTV==value, or just the value, indicating you are searching for the value in any TemplateVar tied to the Resource. An example would be &tvFilters=`filter2==one,filter1==bar%||filter1==foo`. <br />NOTE: filtering by values uses a LIKE query and % is considered a wildcard. <br />ANOTHER NOTE: This only looks at the raw value set for specific Resource, i. e. there must be a value specifically set for the Resource and it is not evaluated.',
              'area_trans' => '',
            ),
            'tvFiltersAndDelimiter' => 
            array (
              'name' => 'tvFiltersAndDelimiter',
              'desc' => 'The delimiter to use to separate logical AND expressions in tvFilters. Default is ,',
              'type' => 'textfield',
              'options' => '',
              'value' => ',',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'The delimiter to use to separate logical AND expressions in tvFilters. Default is ,',
              'area_trans' => '',
            ),
            'tvFiltersOrDelimiter' => 
            array (
              'name' => 'tvFiltersOrDelimiter',
              'desc' => 'The delimiter to use to separate logical OR expressions in tvFilters. Default is ||',
              'type' => 'textfield',
              'options' => '',
              'value' => '||',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'The delimiter to use to separate logical OR expressions in tvFilters. Default is ||',
              'area_trans' => '',
            ),
            'depth' => 
            array (
              'name' => 'depth',
              'desc' => 'Integer value indicating depth to search for resources from each parent. Defaults to 10.',
              'type' => 'textfield',
              'options' => '',
              'value' => '10',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Integer value indicating depth to search for resources from each parent. Defaults to 10.',
              'area_trans' => '',
            ),
            'parents' => 
            array (
              'name' => 'parents',
              'desc' => 'Optional. Comma-delimited list of ids serving as parents.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Optional. Comma-delimited list of ids serving as parents.',
              'area_trans' => '',
            ),
            'includeContent' => 
            array (
              'name' => 'includeContent',
              'desc' => 'Indicates if the content of each resource should be returned in the results. Defaults to false.',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Indicates if the content of each resource should be returned in the results. Defaults to false.',
              'area_trans' => '',
            ),
            'includeTVs' => 
            array (
              'name' => 'includeTVs',
              'desc' => 'Indicates if TemplateVar values should be included in the properties available to each resource template. Defaults to false.',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Indicates if TemplateVar values should be included in the properties available to each resource template. Defaults to false.',
              'area_trans' => '',
            ),
            'includeTVList' => 
            array (
              'name' => 'includeTVList',
              'desc' => 'Limits included TVs to those specified as a comma-delimited list of TV names. Defaults to empty.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Limits included TVs to those specified as a comma-delimited list of TV names. Defaults to empty.',
              'area_trans' => '',
            ),
            'showHidden' => 
            array (
              'name' => 'showHidden',
              'desc' => 'Indicates if Resources that are hidden from menus should be shown. Defaults to false.',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Indicates if Resources that are hidden from menus should be shown. Defaults to false.',
              'area_trans' => '',
            ),
            'showUnpublished' => 
            array (
              'name' => 'showUnpublished',
              'desc' => 'Indicates if Resources that are unpublished should be shown. Defaults to false.',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Indicates if Resources that are unpublished should be shown. Defaults to false.',
              'area_trans' => '',
            ),
            'showDeleted' => 
            array (
              'name' => 'showDeleted',
              'desc' => 'Indicates if Resources that are deleted should be shown. Defaults to false.',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Indicates if Resources that are deleted should be shown. Defaults to false.',
              'area_trans' => '',
            ),
            'resources' => 
            array (
              'name' => 'resources',
              'desc' => 'A comma-separated list of resource IDs to exclude or include. IDs with a - in front mean to exclude. Ex: 123,-456 means to include Resource 123, but always exclude Resource 456.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'A comma-separated list of resource IDs to exclude or include. IDs with a - in front mean to exclude. Ex: 123,-456 means to include Resource 123, but always exclude Resource 456.',
              'area_trans' => '',
            ),
            'processTVs' => 
            array (
              'name' => 'processTVs',
              'desc' => 'Indicates if TemplateVar values should be rendered as they would on the resource being summarized. Defaults to false.',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Indicates if TemplateVar values should be rendered as they would on the resource being summarized. Defaults to false.',
              'area_trans' => '',
            ),
            'processTVList' => 
            array (
              'name' => 'processTVList',
              'desc' => 'Limits processed TVs to those specified as a comma-delimited list of TV names; note only includedTVs will be available for processing if specified. Defaults to empty.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Limits processed TVs to those specified as a comma-delimited list of TV names; note only includedTVs will be available for processing if specified. Defaults to empty.',
              'area_trans' => '',
            ),
            'prepareTVs' => 
            array (
              'name' => 'prepareTVs',
              'desc' => 'Indicates if TemplateVar values that are not processed fully should be prepared before being returned. Defaults to true.',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => true,
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Indicates if TemplateVar values that are not processed fully should be prepared before being returned. Defaults to true.',
              'area_trans' => '',
            ),
            'prepareTVList' => 
            array (
              'name' => 'prepareTVList',
              'desc' => 'Limits prepared TVs to those specified as a comma-delimited list of TV names; note only includedTVs will be available for preparing if specified. Defaults to empty.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Limits prepared TVs to those specified as a comma-delimited list of TV names; note only includedTVs will be available for preparing if specified. Defaults to empty.',
              'area_trans' => '',
            ),
            'tvPrefix' => 
            array (
              'name' => 'tvPrefix',
              'desc' => 'The prefix for TemplateVar properties. Defaults to: tv.',
              'type' => 'textfield',
              'options' => '',
              'value' => 'tv.',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'The prefix for TemplateVar properties. Defaults to: tv.',
              'area_trans' => '',
            ),
            'idx' => 
            array (
              'name' => 'idx',
              'desc' => 'You can define the starting idx of the resources, which is an property that is incremented as each resource is rendered.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'You can define the starting idx of the resources, which is an property that is incremented as each resource is rendered.',
              'area_trans' => '',
            ),
            'first' => 
            array (
              'name' => 'first',
              'desc' => 'Define the idx which represents the first resource (see tplFirst). Defaults to 1.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Define the idx which represents the first resource (see tplFirst). Defaults to 1.',
              'area_trans' => '',
            ),
            'last' => 
            array (
              'name' => 'last',
              'desc' => 'Define the idx which represents the last resource (see tplLast). Defaults to the number of resources being summarized + first - 1',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Define the idx which represents the last resource (see tplLast). Defaults to the number of resources being summarized + first - 1',
              'area_trans' => '',
            ),
            'toPlaceholder' => 
            array (
              'name' => 'toPlaceholder',
              'desc' => 'If set, will assign the result to this placeholder instead of outputting it directly.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'If set, will assign the result to this placeholder instead of outputting it directly.',
              'area_trans' => '',
            ),
            'toSeparatePlaceholders' => 
            array (
              'name' => 'toSeparatePlaceholders',
              'desc' => 'If set, will assign EACH result to a separate placeholder named by this param suffixed with a sequential number (starting from 0).',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'If set, will assign EACH result to a separate placeholder named by this param suffixed with a sequential number (starting from 0).',
              'area_trans' => '',
            ),
            'debug' => 
            array (
              'name' => 'debug',
              'desc' => 'If true, will send the SQL query to the MODX log. Defaults to false.',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'If true, will send the SQL query to the MODX log. Defaults to false.',
              'area_trans' => '',
            ),
            'where' => 
            array (
              'name' => 'where',
              'desc' => 'A JSON expression of criteria to build any additional where clauses from, e.g. &where=`{{"alias:LIKE":"foo%", "OR:alias:LIKE":"%bar"},{"OR:pagetitle:=":"foobar", "AND:description:=":"raboof"}}`',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'A JSON expression of criteria to build any additional where clauses from, e.g. &where=`{{"alias:LIKE":"foo%", "OR:alias:LIKE":"%bar"},{"OR:pagetitle:=":"foobar", "AND:description:=":"raboof"}}`',
              'area_trans' => '',
            ),
            'dbCacheFlag' => 
            array (
              'name' => 'dbCacheFlag',
              'desc' => 'Determines how result sets are cached if cache_db is enabled in MODX. 0|false = do not cache result set; 1 = cache result set according to cache settings, any other integer value = number of seconds to cache result set',
              'type' => 'textfield',
              'options' => '',
              'value' => '0',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'Determines how result sets are cached if cache_db is enabled in MODX. 0|false = do not cache result set; 1 = cache result set according to cache settings, any other integer value = number of seconds to cache result set',
              'area_trans' => '',
            ),
            'context' => 
            array (
              'name' => 'context',
              'desc' => 'A comma-delimited list of context keys for limiting results. Default is empty, i.e. do not limit results by context.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'A comma-delimited list of context keys for limiting results. Default is empty, i.e. do not limit results by context.',
              'area_trans' => '',
            ),
            'tplCondition' => 
            array (
              'name' => 'tplCondition',
              'desc' => 'A condition to compare against the conditionalTpls property to map Resources to different tpls based on custom conditional logic.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'A condition to compare against the conditionalTpls property to map Resources to different tpls based on custom conditional logic.',
              'area_trans' => '',
            ),
            'tplOperator' => 
            array (
              'name' => 'tplOperator',
              'desc' => 'An optional operator to use for the tplCondition when comparing against the conditionalTpls operands. Default is == (equals).',
              'type' => 'list',
              'options' => 
              array (
                0 => 
                array (
                  'text' => 'is equal to',
                  'value' => '==',
                  'name' => 'is equal to',
                ),
                1 => 
                array (
                  'text' => 'is not equal to',
                  'value' => '!=',
                  'name' => 'is not equal to',
                ),
                2 => 
                array (
                  'text' => 'less than',
                  'value' => '<',
                  'name' => 'less than',
                ),
                3 => 
                array (
                  'text' => 'less than or equal to',
                  'value' => '<=',
                  'name' => 'less than or equal to',
                ),
                4 => 
                array (
                  'text' => 'greater than or equal to',
                  'value' => '>=',
                  'name' => 'greater than or equal to',
                ),
                5 => 
                array (
                  'text' => 'is empty',
                  'value' => 'empty',
                  'name' => 'is empty',
                ),
                6 => 
                array (
                  'text' => 'is not empty',
                  'value' => '!empty',
                  'name' => 'is not empty',
                ),
                7 => 
                array (
                  'text' => 'is null',
                  'value' => 'null',
                  'name' => 'is null',
                ),
                8 => 
                array (
                  'text' => 'is in array',
                  'value' => 'inarray',
                  'name' => 'is in array',
                ),
                9 => 
                array (
                  'text' => 'is between',
                  'value' => 'between',
                  'name' => 'is between',
                ),
              ),
              'value' => '==',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'An optional operator to use for the tplCondition when comparing against the conditionalTpls operands. Default is == (equals).',
              'area_trans' => '',
            ),
            'conditionalTpls' => 
            array (
              'name' => 'conditionalTpls',
              'desc' => 'A JSON map of conditional operands and tpls to compare against the tplCondition property using the specified tplOperator.',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => NULL,
              'area' => '',
              'desc_trans' => 'A JSON map of conditional operands and tpls to compare against the tplCondition property using the specified tplOperator.',
              'area_trans' => '',
            ),
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => '',
          'content' => '/**
 * getResources
 *
 * A general purpose Resource listing and summarization snippet for MODX 2.x.
 *
 * @author Jason Coward
 * @copyright Copyright 2010-2013, Jason Coward
 *
 * TEMPLATES
 *
 * tpl - Name of a chunk serving as a resource template
 * [NOTE: if not provided, properties are dumped to output for each resource]
 *
 * tplOdd - (Opt) Name of a chunk serving as resource template for resources with an odd idx value
 * (see idx property)
 * tplFirst - (Opt) Name of a chunk serving as resource template for the first resource (see first
 * property)
 * tplLast - (Opt) Name of a chunk serving as resource template for the last resource (see last
 * property)
 * tpl_{n} - (Opt) Name of a chunk serving as resource template for the nth resource
 *
 * tplCondition - (Opt) Defines a field of the resource to evaluate against keys defined in the
 * conditionalTpls property. Must be a resource field; does not work with Template Variables.
 * conditionalTpls - (Opt) A JSON object defining a map of field values and the associated tpl to
 * use when the field defined by tplCondition matches the value. [NOTE: tplOdd, tplFirst, tplLast,
 * and tpl_{n} will take precedence over any defined conditionalTpls]
 *
 * tplWrapper - (Opt) Name of a chunk serving as a wrapper template for the output
 * [NOTE: Does not work with toSeparatePlaceholders]
 *
 * SELECTION
 *
 * parents - Comma-delimited list of ids serving as parents
 *
 * context - (Opt) Comma-delimited list of context keys to limit results by; if empty, contexts for all specified
 * parents will be used (all contexts if 0 is specified) [default=]
 *
 * depth - (Opt) Integer value indicating depth to search for resources from each parent [default=10]
 *
 * tvFilters - (Opt) Delimited-list of TemplateVar values to filter resources by. Supports two
 * delimiters and two value search formats. The first delimiter || represents a logical OR and the
 * primary grouping mechanism.  Within each group you can provide a comma-delimited list of values.
 * These values can be either tied to a specific TemplateVar by name, e.g. myTV==value, or just the
 * value, indicating you are searching for the value in any TemplateVar tied to the Resource. An
 * example would be &tvFilters=`filter2==one,filter1==bar%||filter1==foo`
 * [NOTE: filtering by values uses a LIKE query and % is considered a wildcard.]
 * [NOTE: this only looks at the raw value set for specific Resource, i. e. there must be a value
 * specifically set for the Resource and it is not evaluated.]
 *
 * tvFiltersAndDelimiter - (Opt) Custom delimiter for logical AND, default \',\', in case you want to
 * match a literal comma in the tvFilters. E.g. &tvFiltersAndDelimiter=`&&`
 * &tvFilters=`filter1==foo,bar&&filter2==baz` [default=,]
 *
 * tvFiltersOrDelimiter - (Opt) Custom delimiter for logical OR, default \'||\', in case you want to
 * match a literal \'||\' in the tvFilters. E.g. &tvFiltersOrDelimiter=`|OR|`
 * &tvFilters=`filter1==foo||bar|OR|filter2==baz` [default=||]
 *
 * where - (Opt) A JSON expression of criteria to build any additional where clauses from. An example would be
 * &where=`{{"alias:LIKE":"foo%", "OR:alias:LIKE":"%bar"},{"OR:pagetitle:=":"foobar", "AND:description:=":"raboof"}}`
 *
 * sortby - (Opt) Field to sort by or a JSON array, e.g. {"publishedon":"ASC","createdon":"DESC"} [default=publishedon]
 * sortbyTV - (opt) A Template Variable name to sort by (if supplied, this precedes the sortby value) [default=]
 * sortbyTVType - (Opt) A data type to CAST a TV Value to in order to sort on it properly [default=string]
 * sortbyAlias - (Opt) Query alias for sortby field [default=]
 * sortbyEscaped - (Opt) Escapes the field name(s) specified in sortby [default=0]
 * sortdir - (Opt) Order which to sort by [default=DESC]
 * sortdirTV - (Opt) Order which to sort by a TV [default=DESC]
 * limit - (Opt) Limits the number of resources returned [default=5]
 * offset - (Opt) An offset of resources returned by the criteria to skip [default=0]
 * dbCacheFlag - (Opt) Controls caching of db queries; 0|false = do not cache result set; 1 = cache result set
 * according to cache settings, any other integer value = number of seconds to cache result set [default=0]
 *
 * OPTIONS
 *
 * includeContent - (Opt) Indicates if the content of each resource should be returned in the
 * results [default=0]
 * includeTVs - (Opt) Indicates if TemplateVar values should be included in the properties available
 * to each resource template [default=0]
 * includeTVList - (Opt) Limits the TemplateVars that are included if includeTVs is true to those specified
 * by name in a comma-delimited list [default=]
 * prepareTVs - (Opt) Prepares media-source dependent TemplateVar values [default=1]
 * prepareTVList - (Opt) Limits the TVs that are prepared to those specified by name in a comma-delimited
 * list [default=]
 * processTVs - (Opt) Indicates if TemplateVar values should be rendered as they would on the
 * resource being summarized [default=0]
 * processTVList - (opt) Limits the TemplateVars that are processed if included to those specified
 * by name in a comma-delimited list [default=]
 * tvPrefix - (Opt) The prefix for TemplateVar properties [default=tv.]
 * idx - (Opt) You can define the starting idx of the resources, which is an property that is
 * incremented as each resource is rendered [default=1]
 * first - (Opt) Define the idx which represents the first resource (see tplFirst) [default=1]
 * last - (Opt) Define the idx which represents the last resource (see tplLast) [default=# of
 * resources being summarized + first - 1]
 * outputSeparator - (Opt) An optional string to separate each tpl instance [default="\\n"]
 * wrapIfEmpty - (Opt) Indicates if the tplWrapper should be applied if the output is empty [default=0]
 *
 */
$output = array();
$outputSeparator = isset($outputSeparator) ? $outputSeparator : "\\n";

/* set default properties */
$tpl = !empty($tpl) ? $tpl : \'\';
$includeContent = !empty($includeContent) ? true : false;
$includeTVs = !empty($includeTVs) ? true : false;
$includeTVList = !empty($includeTVList) ? explode(\',\', $includeTVList) : array();
$processTVs = !empty($processTVs) ? true : false;
$processTVList = !empty($processTVList) ? explode(\',\', $processTVList) : array();
$prepareTVs = !empty($prepareTVs) ? true : false;
$prepareTVList = !empty($prepareTVList) ? explode(\',\', $prepareTVList) : array();
$tvPrefix = isset($tvPrefix) ? $tvPrefix : \'tv.\';
$parents = (!empty($parents) || $parents === \'0\') ? explode(\',\', $parents) : array($modx->resource->get(\'id\'));
array_walk($parents, \'trim\');
$parents = array_unique($parents);
$depth = isset($depth) ? (integer) $depth : 10;

$tvFiltersOrDelimiter = isset($tvFiltersOrDelimiter) ? $tvFiltersOrDelimiter : \'||\';
$tvFiltersAndDelimiter = isset($tvFiltersAndDelimiter) ? $tvFiltersAndDelimiter : \',\';
$tvFilters = !empty($tvFilters) ? explode($tvFiltersOrDelimiter, $tvFilters) : array();

$where = !empty($where) ? $modx->fromJSON($where) : array();
$showUnpublished = !empty($showUnpublished) ? true : false;
$showDeleted = !empty($showDeleted) ? true : false;

$sortby = isset($sortby) ? $sortby : \'publishedon\';
$sortbyTV = isset($sortbyTV) ? $sortbyTV : \'\';
$sortbyAlias = isset($sortbyAlias) ? $sortbyAlias : \'modResource\';
$sortbyEscaped = !empty($sortbyEscaped) ? true : false;
$sortdir = isset($sortdir) ? $sortdir : \'DESC\';
$sortdirTV = isset($sortdirTV) ? $sortdirTV : \'DESC\';
$limit = isset($limit) ? (integer) $limit : 5;
$offset = isset($offset) ? (integer) $offset : 0;
$totalVar = !empty($totalVar) ? $totalVar : \'total\';

$dbCacheFlag = !isset($dbCacheFlag) ? false : $dbCacheFlag;
if (is_string($dbCacheFlag) || is_numeric($dbCacheFlag)) {
    if ($dbCacheFlag == \'0\') {
        $dbCacheFlag = false;
    } elseif ($dbCacheFlag == \'1\') {
        $dbCacheFlag = true;
    } else {
        $dbCacheFlag = (integer) $dbCacheFlag;
    }
}

/* multiple context support */
$contextArray = array();
$contextSpecified = false;
if (!empty($context)) {
    $contextArray = explode(\',\',$context);
    array_walk($contextArray, \'trim\');
    $contexts = array();
    foreach ($contextArray as $ctx) {
        $contexts[] = $modx->quote($ctx);
    }
    $context = implode(\',\',$contexts);
    $contextSpecified = true;
    unset($contexts,$ctx);
} else {
    $context = $modx->quote($modx->context->get(\'key\'));
}

$pcMap = array();
$pcQuery = $modx->newQuery(\'modResource\', array(\'id:IN\' => $parents), $dbCacheFlag);
$pcQuery->select(array(\'id\', \'context_key\'));
if ($pcQuery->prepare() && $pcQuery->stmt->execute()) {
    foreach ($pcQuery->stmt->fetchAll(PDO::FETCH_ASSOC) as $pcRow) {
        $pcMap[(integer) $pcRow[\'id\']] = $pcRow[\'context_key\'];
    }
}

$children = array();
$parentArray = array();
foreach ($parents as $parent) {
    $parent = (integer) $parent;
    if ($parent === 0) {
        $pchildren = array();
        if ($contextSpecified) {
            foreach ($contextArray as $pCtx) {
                if (!in_array($pCtx, $contextArray)) {
                    continue;
                }
                $options = $pCtx !== $modx->context->get(\'key\') ? array(\'context\' => $pCtx) : array();
                $pcchildren = $modx->getChildIds($parent, $depth, $options);
                if (!empty($pcchildren)) $pchildren = array_merge($pchildren, $pcchildren);
            }
        } else {
            $cQuery = $modx->newQuery(\'modContext\', array(\'key:!=\' => \'mgr\'));
            $cQuery->select(array(\'key\'));
            if ($cQuery->prepare() && $cQuery->stmt->execute()) {
                foreach ($cQuery->stmt->fetchAll(PDO::FETCH_COLUMN) as $pCtx) {
                    $options = $pCtx !== $modx->context->get(\'key\') ? array(\'context\' => $pCtx) : array();
                    $pcchildren = $modx->getChildIds($parent, $depth, $options);
                    if (!empty($pcchildren)) $pchildren = array_merge($pchildren, $pcchildren);
                }
            }
        }
        $parentArray[] = $parent;
    } else {
        $pContext = array_key_exists($parent, $pcMap) ? $pcMap[$parent] : false;
        if ($debug) $modx->log(modX::LOG_LEVEL_ERROR, "context for {$parent} is {$pContext}");
        if ($pContext && $contextSpecified && !in_array($pContext, $contextArray, true)) {
            $parent = next($parents);
            continue;
        }
        $parentArray[] = $parent;
        $options = !empty($pContext) && $pContext !== $modx->context->get(\'key\') ? array(\'context\' => $pContext) : array();
        $pchildren = $modx->getChildIds($parent, $depth, $options);
    }
    if (!empty($pchildren)) $children = array_merge($children, $pchildren);
    $parent = next($parents);
}
$parents = array_merge($parentArray, $children);

/* build query */
$criteria = array("modResource.parent IN (" . implode(\',\', $parents) . ")");
if ($contextSpecified) {
    $contextResourceTbl = $modx->getTableName(\'modContextResource\');
    $criteria[] = "(modResource.context_key IN ({$context}) OR EXISTS(SELECT 1 FROM {$contextResourceTbl} ctx WHERE ctx.resource = modResource.id AND ctx.context_key IN ({$context})))";
}
if (empty($showDeleted)) {
    $criteria[\'deleted\'] = \'0\';
}
if (empty($showUnpublished)) {
    $criteria[\'published\'] = \'1\';
}
if (empty($showHidden)) {
    $criteria[\'hidemenu\'] = \'0\';
}
if (!empty($hideContainers)) {
    $criteria[\'isfolder\'] = \'0\';
}
$criteria = $modx->newQuery(\'modResource\', $criteria);
if (!empty($tvFilters)) {
    $tmplVarTbl = $modx->getTableName(\'modTemplateVar\');
    $tmplVarResourceTbl = $modx->getTableName(\'modTemplateVarResource\');
    $conditions = array();
    $operators = array(
        \'<=>\' => \'<=>\',
        \'===\' => \'=\',
        \'!==\' => \'!=\',
        \'<>\' => \'<>\',
        \'==\' => \'LIKE\',
        \'!=\' => \'NOT LIKE\',
        \'<<\' => \'<\',
        \'<=\' => \'<=\',
        \'=<\' => \'=<\',
        \'>>\' => \'>\',
        \'>=\' => \'>=\',
        \'=>\' => \'=>\'
    );
    foreach ($tvFilters as $fGroup => $tvFilter) {
        $filterGroup = array();
        $filters = explode($tvFiltersAndDelimiter, $tvFilter);
        $multiple = count($filters) > 0;
        foreach ($filters as $filter) {
            $operator = \'==\';
            $sqlOperator = \'LIKE\';
            foreach ($operators as $op => $opSymbol) {
                if (strpos($filter, $op, 1) !== false) {
                    $operator = $op;
                    $sqlOperator = $opSymbol;
                    break;
                }
            }
            $tvValueField = \'tvr.value\';
            $tvDefaultField = \'tv.default_text\';
            $f = explode($operator, $filter);
            if (count($f) >= 2) {
                if (count($f) > 2) {
                    $k = array_shift($f);
                    $b = join($operator, $f);
                    $f = array($k, $b);
                }
                $tvName = $modx->quote($f[0]);
                if (is_numeric($f[1]) && !in_array($sqlOperator, array(\'LIKE\', \'NOT LIKE\'))) {
                    $tvValue = $f[1];
                    if ($f[1] == (integer)$f[1]) {
                        $tvValueField = "CAST({$tvValueField} AS SIGNED INTEGER)";
                        $tvDefaultField = "CAST({$tvDefaultField} AS SIGNED INTEGER)";
                    } else {
                        $tvValueField = "CAST({$tvValueField} AS DECIMAL)";
                        $tvDefaultField = "CAST({$tvDefaultField} AS DECIMAL)";
                    }
                } else {
                    $tvValue = $modx->quote($f[1]);
                }
                if ($multiple) {
                    $filterGroup[] =
                        "(EXISTS (SELECT 1 FROM {$tmplVarResourceTbl} tvr JOIN {$tmplVarTbl} tv ON {$tvValueField} {$sqlOperator} {$tvValue} AND tv.name = {$tvName} AND tv.id = tvr.tmplvarid WHERE tvr.contentid = modResource.id) " .
                        "OR EXISTS (SELECT 1 FROM {$tmplVarTbl} tv WHERE tv.name = {$tvName} AND {$tvDefaultField} {$sqlOperator} {$tvValue} AND tv.id NOT IN (SELECT tmplvarid FROM {$tmplVarResourceTbl} WHERE contentid = modResource.id)) " .
                        ")";
                } else {
                    $filterGroup =
                        "(EXISTS (SELECT 1 FROM {$tmplVarResourceTbl} tvr JOIN {$tmplVarTbl} tv ON {$tvValueField} {$sqlOperator} {$tvValue} AND tv.name = {$tvName} AND tv.id = tvr.tmplvarid WHERE tvr.contentid = modResource.id) " .
                        "OR EXISTS (SELECT 1 FROM {$tmplVarTbl} tv WHERE tv.name = {$tvName} AND {$tvDefaultField} {$sqlOperator} {$tvValue} AND tv.id NOT IN (SELECT tmplvarid FROM {$tmplVarResourceTbl} WHERE contentid = modResource.id)) " .
                        ")";
                }
            } elseif (count($f) == 1) {
                $tvValue = $modx->quote($f[0]);
                if ($multiple) {
                    $filterGroup[] = "EXISTS (SELECT 1 FROM {$tmplVarResourceTbl} tvr JOIN {$tmplVarTbl} tv ON {$tvValueField} {$sqlOperator} {$tvValue} AND tv.id = tvr.tmplvarid WHERE tvr.contentid = modResource.id)";
                } else {
                    $filterGroup = "EXISTS (SELECT 1 FROM {$tmplVarResourceTbl} tvr JOIN {$tmplVarTbl} tv ON {$tvValueField} {$sqlOperator} {$tvValue} AND tv.id = tvr.tmplvarid WHERE tvr.contentid = modResource.id)";
                }
            }
        }
        $conditions[] = $filterGroup;
    }
    if (!empty($conditions)) {
        $firstGroup = true;
        foreach ($conditions as $cGroup => $c) {
            if (is_array($c)) {
                $first = true;
                foreach ($c as $cond) {
                    if ($first && !$firstGroup) {
                        $criteria->condition($criteria->query[\'where\'][0][1], $cond, xPDOQuery::SQL_OR, null, $cGroup);
                    } else {
                        $criteria->condition($criteria->query[\'where\'][0][1], $cond, xPDOQuery::SQL_AND, null, $cGroup);
                    }
                    $first = false;
                }
            } else {
                $criteria->condition($criteria->query[\'where\'][0][1], $c, $firstGroup ? xPDOQuery::SQL_AND : xPDOQuery::SQL_OR, null, $cGroup);
            }
            $firstGroup = false;
        }
    }
}
/* include/exclude resources, via &resources=`123,-456` prop */
if (!empty($resources)) {
    $resourceConditions = array();
    $resources = explode(\',\',$resources);
    $include = array();
    $exclude = array();
    foreach ($resources as $resource) {
        $resource = (int)$resource;
        if ($resource == 0) continue;
        if ($resource < 0) {
            $exclude[] = abs($resource);
        } else {
            $include[] = $resource;
        }
    }
    if (!empty($include)) {
        $criteria->where(array(\'OR:modResource.id:IN\' => $include), xPDOQuery::SQL_OR);
    }
    if (!empty($exclude)) {
        $criteria->where(array(\'modResource.id:NOT IN\' => $exclude), xPDOQuery::SQL_AND, null, 1);
    }
}
if (!empty($where)) {
    $criteria->where($where);
}

$total = $modx->getCount(\'modResource\', $criteria);
$modx->setPlaceholder($totalVar, $total);

$fields = array_keys($modx->getFields(\'modResource\'));
if (empty($includeContent)) {
    $fields = array_diff($fields, array(\'content\'));
}
$columns = $includeContent ? $modx->getSelectColumns(\'modResource\', \'modResource\') : $modx->getSelectColumns(\'modResource\', \'modResource\', \'\', array(\'content\'), true);
$criteria->select($columns);
if (!empty($sortbyTV)) {
    $criteria->leftJoin(\'modTemplateVar\', \'tvDefault\', array(
        "tvDefault.name" => $sortbyTV
    ));
    $criteria->leftJoin(\'modTemplateVarResource\', \'tvSort\', array(
        "tvSort.contentid = modResource.id",
        "tvSort.tmplvarid = tvDefault.id"
    ));
    if (empty($sortbyTVType)) $sortbyTVType = \'string\';
    if ($modx->getOption(\'dbtype\') === \'mysql\') {
        switch ($sortbyTVType) {
            case \'integer\':
                $criteria->select("CAST(IFNULL(tvSort.value, tvDefault.default_text) AS SIGNED INTEGER) AS sortTV");
                break;
            case \'decimal\':
                $criteria->select("CAST(IFNULL(tvSort.value, tvDefault.default_text) AS DECIMAL) AS sortTV");
                break;
            case \'datetime\':
                $criteria->select("CAST(IFNULL(tvSort.value, tvDefault.default_text) AS DATETIME) AS sortTV");
                break;
            case \'string\':
            default:
                $criteria->select("IFNULL(tvSort.value, tvDefault.default_text) AS sortTV");
                break;
        }
    } elseif ($modx->getOption(\'dbtype\') === \'sqlsrv\') {
        switch ($sortbyTVType) {
            case \'integer\':
                $criteria->select("CAST(ISNULL(tvSort.value, tvDefault.default_text) AS BIGINT) AS sortTV");
                break;
            case \'decimal\':
                $criteria->select("CAST(ISNULL(tvSort.value, tvDefault.default_text) AS DECIMAL) AS sortTV");
                break;
            case \'datetime\':
                $criteria->select("CAST(ISNULL(tvSort.value, tvDefault.default_text) AS DATETIME) AS sortTV");
                break;
            case \'string\':
            default:
                $criteria->select("ISNULL(tvSort.value, tvDefault.default_text) AS sortTV");
                break;
        }
    }
    $criteria->sortby("sortTV", $sortdirTV);
}
if (!empty($sortby)) {
    if (strpos($sortby, \'{\') === 0) {
        $sorts = $modx->fromJSON($sortby);
    } else {
        $sorts = array($sortby => $sortdir);
    }
    if (is_array($sorts)) {
        while (list($sort, $dir) = each($sorts)) {
            if ($sortbyEscaped) $sort = $modx->escape($sort);
            if (!empty($sortbyAlias)) $sort = $modx->escape($sortbyAlias) . ".{$sort}";
            $criteria->sortby($sort, $dir);
        }
    }
}
if (!empty($limit)) $criteria->limit($limit, $offset);

if (!empty($debug)) {
    $criteria->prepare();
    $modx->log(modX::LOG_LEVEL_ERROR, $criteria->toSQL());
}
$collection = $modx->getCollection(\'modResource\', $criteria, $dbCacheFlag);

$idx = !empty($idx) || $idx === \'0\' ? (integer) $idx : 1;
$first = empty($first) && $first !== \'0\' ? 1 : (integer) $first;
$last = empty($last) ? (count($collection) + $idx - 1) : (integer) $last;

/* include parseTpl */
include_once $modx->getOption(\'getresources.core_path\',null,$modx->getOption(\'core_path\').\'components/getresources/\').\'include.parsetpl.php\';

$templateVars = array();
if (!empty($includeTVs) && !empty($includeTVList)) {
    $templateVars = $modx->getCollection(\'modTemplateVar\', array(\'name:IN\' => $includeTVList));
}
/** @var modResource $resource */
foreach ($collection as $resourceId => $resource) {
    $tvs = array();
    if (!empty($includeTVs)) {
        if (empty($includeTVList)) {
            $templateVars = $resource->getMany(\'TemplateVars\');
        }
        /** @var modTemplateVar $templateVar */
        foreach ($templateVars as $tvId => $templateVar) {
            if (!empty($includeTVList) && !in_array($templateVar->get(\'name\'), $includeTVList)) continue;
            if ($processTVs && (empty($processTVList) || in_array($templateVar->get(\'name\'), $processTVList))) {
                $tvs[$tvPrefix . $templateVar->get(\'name\')] = $templateVar->renderOutput($resource->get(\'id\'));
            } else {
                $value = $templateVar->getValue($resource->get(\'id\'));
                if ($prepareTVs && method_exists($templateVar, \'prepareOutput\') && (empty($prepareTVList) || in_array($templateVar->get(\'name\'), $prepareTVList))) {
                    $value = $templateVar->prepareOutput($value);
                }
                $tvs[$tvPrefix . $templateVar->get(\'name\')] = $value;
            }
        }
    }
    $odd = ($idx & 1);
    $properties = array_merge(
        $scriptProperties
        ,array(
            \'idx\' => $idx
            ,\'first\' => $first
            ,\'last\' => $last
            ,\'odd\' => $odd
        )
        ,$includeContent ? $resource->toArray() : $resource->get($fields)
        ,$tvs
    );
    $resourceTpl = false;
    if ($idx == $first && !empty($tplFirst)) {
        $resourceTpl = parseTpl($tplFirst, $properties);
    }
    if ($idx == $last && empty($resourceTpl) && !empty($tplLast)) {
        $resourceTpl = parseTpl($tplLast, $properties);
    }
    $tplidx = \'tpl_\' . $idx;
    if (empty($resourceTpl) && !empty($$tplidx)) {
        $resourceTpl = parseTpl($$tplidx, $properties);
    }
    if ($idx > 1 && empty($resourceTpl)) {
        $divisors = getDivisors($idx);
        if (!empty($divisors)) {
            foreach ($divisors as $divisor) {
                $tplnth = \'tpl_n\' . $divisor;
                if (!empty($$tplnth)) {
                    $resourceTpl = parseTpl($$tplnth, $properties);
                    if (!empty($resourceTpl)) {
                        break;
                    }
                }
            }
        }
    }
    if ($odd && empty($resourceTpl) && !empty($tplOdd)) {
        $resourceTpl = parseTpl($tplOdd, $properties);
    }
    if (!empty($tplCondition) && !empty($conditionalTpls) && empty($resourceTpl)) {
        $conTpls = $modx->fromJSON($conditionalTpls);
        $subject = $properties[$tplCondition];
        $tplOperator = !empty($tplOperator) ? $tplOperator : \'=\';
        $tplOperator = strtolower($tplOperator);
        $tplCon = \'\';
        foreach ($conTpls as $operand => $conditionalTpl) {
            switch ($tplOperator) {
                case \'!=\':
                case \'neq\':
                case \'not\':
                case \'isnot\':
                case \'isnt\':
                case \'unequal\':
                case \'notequal\':
                    $tplCon = (($subject != $operand) ? $conditionalTpl : $tplCon);
                    break;
                case \'<\':
                case \'lt\':
                case \'less\':
                case \'lessthan\':
                    $tplCon = (($subject < $operand) ? $conditionalTpl : $tplCon);
                    break;
                case \'>\':
                case \'gt\':
                case \'greater\':
                case \'greaterthan\':
                    $tplCon = (($subject > $operand) ? $conditionalTpl : $tplCon);
                    break;
                case \'<=\':
                case \'lte\':
                case \'lessthanequals\':
                case \'lessthanorequalto\':
                    $tplCon = (($subject <= $operand) ? $conditionalTpl : $tplCon);
                    break;
                case \'>=\':
                case \'gte\':
                case \'greaterthanequals\':
                case \'greaterthanequalto\':
                    $tplCon = (($subject >= $operand) ? $conditionalTpl : $tplCon);
                    break;
                case \'isempty\':
                case \'empty\':
                    $tplCon = empty($subject) ? $conditionalTpl : $tplCon;
                    break;
                case \'!empty\':
                case \'notempty\':
                case \'isnotempty\':
                    $tplCon = !empty($subject) && $subject != \'\' ? $conditionalTpl : $tplCon;
                    break;
                case \'isnull\':
                case \'null\':
                    $tplCon = $subject == null || strtolower($subject) == \'null\' ? $conditionalTpl : $tplCon;
                    break;
                case \'inarray\':
                case \'in_array\':
                case \'ia\':
                    $operand = explode(\',\', $operand);
                    $tplCon = in_array($subject, $operand) ? $conditionalTpl : $tplCon;
                    break;
                case \'between\':
                case \'range\':
                case \'>=<\':
                case \'><\':
                    $operand = explode(\',\', $operand);
                    $tplCon = ($subject >= min($operand) && $subject <= max($operand)) ? $conditionalTpl : $tplCon;
                    break;
                case \'==\':
                case \'=\':
                case \'eq\':
                case \'is\':
                case \'equal\':
                case \'equals\':
                case \'equalto\':
                default:
                    $tplCon = (($subject == $operand) ? $conditionalTpl : $tplCon);
                    break;
            }
        }
        if (!empty($tplCon)) {
            $resourceTpl = parseTpl($tplCon, $properties);
        }
    }
    if (!empty($tpl) && empty($resourceTpl)) {
        $resourceTpl = parseTpl($tpl, $properties);
    }
    if ($resourceTpl === false && !empty($debug)) {
        $chunk = $modx->newObject(\'modChunk\');
        $chunk->setCacheable(false);
        $output[]= $chunk->process(array(), \'<pre>\' . print_r($properties, true) .\'</pre>\');
    } else {
        $output[]= $resourceTpl;
    }
    $idx++;
}

/* output */
$toSeparatePlaceholders = $modx->getOption(\'toSeparatePlaceholders\', $scriptProperties, false);
if (!empty($toSeparatePlaceholders)) {
    $modx->setPlaceholders($output, $toSeparatePlaceholders);
    return \'\';
}

$output = implode($outputSeparator, $output);

$tplWrapper = $modx->getOption(\'tplWrapper\', $scriptProperties, false);
$wrapIfEmpty = $modx->getOption(\'wrapIfEmpty\', $scriptProperties, false);
if (!empty($tplWrapper) && ($wrapIfEmpty || !empty($output))) {
    $output = parseTpl($tplWrapper, array_merge($scriptProperties, array(\'output\' => $output)));
}

$toPlaceholder = $modx->getOption(\'toPlaceholder\', $scriptProperties, false);
if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $output);
    return \'\';
}
return $output;',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
        ),
      ),
      'FormIt' => 
      array (
        'fields' => 
        array (
          'id' => 31,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'FormIt',
          'description' => 'A dynamic form processing snippet.',
          'editor_type' => 0,
          'category' => 9,
          'cache_type' => 0,
          'snippet' => '/**
 * FormIt
 *
 * Copyright 2009-2012 by Shaun McCormick <shaun@modx.com>
 *
 * FormIt is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option) any
 * later version.
 *
 * FormIt is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * FormIt; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package formit
 */
/**
 * FormIt
 *
 * A dynamic form processing Snippet for MODx Revolution.
 *
 * @package formit
 */
require_once $modx->getOption(\'formit.core_path\',null,$modx->getOption(\'core_path\',null,MODX_CORE_PATH).\'components/formit/\').\'model/formit/formit.class.php\';
$fi = new FormIt($modx,$scriptProperties);
$fi->initialize($modx->context->get(\'key\'));
$fi->loadRequest();

$fields = $fi->request->prepare();
return $fi->request->handle($fields);',
          'locked' => false,
          'properties' => 
          array (
            'hooks' => 
            array (
              'name' => 'hooks',
              'desc' => 'prop_formit.hooks_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Разделённый запятыми список хуков которые будут выполнятся по очереди после того как форма пройдёт проверку. Если какой-то из хуков вернёт false, то следующии хуки не будут выполнены. Хук также может быть именем сниппета, этот сниппет будет выполнен как хук.',
              'area_trans' => '',
            ),
            'preHooks' => 
            array (
              'name' => 'preHooks',
              'desc' => 'prop_formit.prehooks_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Разделённый запятыми список хуков которые будут выполнятся по очереди после того как форма будет загружена. Если какой-то из хуков вернёт false, то следующие хуки не будут выполнены. Например: можно предварительно устанавливать значения полей формы с помощью $scriptProperties[`hook`]->fields[`fieldname`]. Хук также может быть именем сниппета, этот сниппет будет выполнен как хук.',
              'area_trans' => '',
            ),
            'submitVar' => 
            array (
              'name' => 'submitVar',
              'desc' => 'prop_formit.submitvar_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Если установлено значение, то обработка формы не начнётся пока  POST параметр с этим именем не будет передан.',
              'area_trans' => '',
            ),
            'validate' => 
            array (
              'name' => 'validate',
              'desc' => 'prop_formit.validate_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Разделённый запятыми список полей для проверки, для каждого поля пишется имя:валидатор (т.е.: username:required,email:required). Валидаторы могут быть объединены через двоеточие, например email:email:required. Этот параметр может быть задан на нескольких строках.',
              'area_trans' => '',
            ),
            'errTpl' => 
            array (
              'name' => 'errTpl',
              'desc' => 'prop_formit.errtpl_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '<span class="error">[[+error]]</span>',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Шаблон сообщения об ошибке.',
              'area_trans' => '',
            ),
            'validationErrorMessage' => 
            array (
              'name' => 'validationErrorMessage',
              'desc' => 'prop_formit.validationerrormessage_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '<p class="error">A form validation error occurred. Please check the values you have entered.</p>',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'A general error message to set to a placeholder if validation fails. Can contain [[+errors]] if you want to display a list of all errors at the top.',
              'area_trans' => '',
            ),
            'validationErrorBulkTpl' => 
            array (
              'name' => 'validationErrorBulkTpl',
              'desc' => 'prop_formit.validationerrorbulktpl_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '<li>[[+error]]</li>',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'HTML tpl that is used for each individual error in the generic validation error message value.',
              'area_trans' => '',
            ),
            'trimValuesBeforeValidation' => 
            array (
              'name' => 'trimValuesBeforeValidation',
              'desc' => 'prop_formit.trimvaluesdeforevalidation_desc',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => true,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Whether or not to trim spaces from the beginning and end of values before attempting validation. Defaults to true.',
              'area_trans' => '',
            ),
            'customValidators' => 
            array (
              'name' => 'customValidators',
              'desc' => 'prop_formit.customvalidators_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Разделённый запятыми список имён пользовательских валидаторов(сниппетов), которые вы планируете использовать в этой форме. Пользовательские валидаторы должны быть обязательно указаны в этом параметре, иначе они не будут работать.',
              'area_trans' => '',
            ),
            'clearFieldsOnSuccess' => 
            array (
              'name' => 'clearFieldsOnSuccess',
              'desc' => 'prop_formit.clearfieldsonsuccess_desc',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => true,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Если установлено значение true, то поля формы будут очищатся после успешной отправки формы.',
              'area_trans' => '',
            ),
            'successMessage' => 
            array (
              'name' => 'successMessage',
              'desc' => 'prop_formit.successmessage_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Значение подстановщика для сообщения об успехе. Имя подстановщика устанавливается в параметре &successMessagePlaceholder, по умолчанию «fi.successMessage».',
              'area_trans' => '',
            ),
            'successMessagePlaceholder' => 
            array (
              'name' => 'successMessagePlaceholder',
              'desc' => 'prop_formit.successmessageplaceholder_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 'fi.successMessage',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Подстановщик для сообщения об успехе.',
              'area_trans' => '',
            ),
            'store' => 
            array (
              'name' => 'store',
              'desc' => 'prop_formit.store_desc',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Если установлено true,  данные переданные через форму будет сохранятcя в кэше, для дальнейшего их использования с помощью сниппета FormItRetriever.',
              'area_trans' => '',
            ),
            'placeholderPrefix' => 
            array (
              'name' => 'placeholderPrefix',
              'desc' => 'prop_formit.placeholderprefix_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 'fi.',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Префикс который используется всеми подстановщиками установлеными FormIt для полей. По умолчанию «fi.»',
              'area_trans' => '',
            ),
            'storeTime' => 
            array (
              'name' => 'storeTime',
              'desc' => 'prop_formit.storetime_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 300,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Если выбрано `запоминание` данных формы, то этот параметр указывает время(в секундах)  для хранения данных из отправленной формы. По умолчанию пять минут.',
              'area_trans' => '',
            ),
            'allowFiles' => 
            array (
              'name' => 'allowFiles',
              'desc' => 'prop_formit.allowfiles_desc',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => true,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'If set to 0, will prevent files from being submitted on the form.',
              'area_trans' => '',
            ),
            'spamEmailFields' => 
            array (
              'name' => 'spamEmailFields',
              'desc' => 'prop_formit.spamemailfields_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 'email',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «spam». Разделённый запятыми список полей содержащих адреса электронной почты для проверки на причастность к спаму.',
              'area_trans' => '',
            ),
            'spamCheckIp' => 
            array (
              'name' => 'spamCheckIp',
              'desc' => 'prop_formit.spamcheckip_desc',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «spam». Если это параметр установлен в true, то будет проверяться ip-адресс отправителя формы на причастность к спаму.',
              'area_trans' => '',
            ),
            'recaptchaJs' => 
            array (
              'name' => 'recaptchaJs',
              'desc' => 'prop_formit.recaptchajs_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '{}',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «recaptcha».  JSON объект который содержит в себе  настройки для виджета reCaptcha.',
              'area_trans' => '',
            ),
            'recaptchaTheme' => 
            array (
              'name' => 'recaptchaTheme',
              'desc' => 'prop_formit.recaptchatheme_desc',
              'type' => 'list',
              'options' => 
              array (
                0 => 
                array (
                  'text' => 'formit.opt_red',
                  'value' => 'red',
                  'name' => 'Red',
                ),
                1 => 
                array (
                  'text' => 'formit.opt_white',
                  'value' => 'white',
                  'name' => 'White',
                ),
                2 => 
                array (
                  'text' => 'formit.opt_clean',
                  'value' => 'clean',
                  'name' => 'Clean',
                ),
                3 => 
                array (
                  'text' => 'formit.opt_blackglass',
                  'value' => 'blackglass',
                  'name' => 'Black Glass',
                ),
              ),
              'value' => 'clean',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «recaptcha». Тема оформления для виджета reCaptcha.',
              'area_trans' => '',
            ),
            'redirectTo' => 
            array (
              'name' => 'redirectTo',
              'desc' => 'prop_formit.redirectto_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «redirect». В этом параметре надо указать идентификатор ресурса на который будет происходить редирект после успешной отправки формы.',
              'area_trans' => '',
            ),
            'redirectParams' => 
            array (
              'name' => 'redirectParams',
              'desc' => 'prop_formit.redirectparams_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => ' JSON array of parameters to pass to the redirect hook that will be passed when redirecting.',
              'area_trans' => '',
            ),
            'emailTo' => 
            array (
              'name' => 'emailTo',
              'desc' => 'prop_formit.emailto_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». Разделённый запятыми список адресов электронной почты на которые надо послать письмо.',
              'area_trans' => '',
            ),
            'emailToName' => 
            array (
              'name' => 'emailToName',
              'desc' => 'prop_formit.emailtoname_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». Необязательный параметр. Разделённый запятыми список имён владельцев адресов электронной почты указанных в параметре «emailTo».',
              'area_trans' => '',
            ),
            'emailFrom' => 
            array (
              'name' => 'emailFrom',
              'desc' => 'prop_formit.emailfrom_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». Необязательный параметр. Если этот параметр установлен, то он будет определять адрес электронной почты отправителя письма. Если не установлен, то сначала адрес электронной почты будет искаться в данных формы  в поле с именем «email», если это поле не будет найдено, то будет использоваться  адрес электронной почты из системной настройки «emailsender».',
              'area_trans' => '',
            ),
            'emailFromName' => 
            array (
              'name' => 'emailFromName',
              'desc' => 'prop_formit.emailfromname_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». Необязательный параметр. Имя отправителя письма.',
              'area_trans' => '',
            ),
            'emailReplyTo' => 
            array (
              'name' => 'emailReplyTo',
              'desc' => 'prop_formit.emailreplyto_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». Необязательный параметр. Адрес электронной почты для ответа на письмо.',
              'area_trans' => '',
            ),
            'emailReplyToName' => 
            array (
              'name' => 'emailReplyToName',
              'desc' => 'prop_formit.emailreplytoname_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». Необязательный параметр. Имя владельца адреса электронной почты который используется для ответа на письмо.',
              'area_trans' => '',
            ),
            'emailCC' => 
            array (
              'name' => 'emailCC',
              'desc' => 'prop_formit.emailcc_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». Разделённый запятыми список адресов электронной почты на которые надо послать копию письма.',
              'area_trans' => '',
            ),
            'emailCCName' => 
            array (
              'name' => 'emailCCName',
              'desc' => 'prop_formit.emailccname_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». Необязательный параметр. Разделённый запятыми список имён владельцев адресов электронной почты указанных в параметре «emailCC».',
              'area_trans' => '',
            ),
            'emailBCC' => 
            array (
              'name' => 'emailBCC',
              'desc' => 'prop_formit.emailbcc_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email».  Разделённый запятыми список адресов  электронной почты на которые надо послать скрытую копию письма.',
              'area_trans' => '',
            ),
            'emailBCCName' => 
            array (
              'name' => 'emailBCCName',
              'desc' => 'prop_formit.emailbccname_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». Необязательный параметр. Разделённый запятыми список имён владельцев адресов электронной почты указанных в параметре «emailBCC».',
              'area_trans' => '',
            ),
            'emailReturnPath' => 
            array (
              'name' => 'emailReturnPath',
              'desc' => 'prop_formit.emailreturnpath_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Optional. If `email` is set as a hook, and this is set, will specify the Return-path: address for the email. If not set, will take the value of `emailFrom` property.',
              'area_trans' => '',
            ),
            'emailSubject' => 
            array (
              'name' => 'emailSubject',
              'desc' => 'prop_formit.emailsubject_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». В этом параметре можно указать тему электронного письма.',
              'area_trans' => '',
            ),
            'emailUseFieldForSubject' => 
            array (
              'name' => 'emailUseFieldForSubject',
              'desc' => 'prop_formit.emailusefieldforsubject_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Если поле «subject» используется в форме, и это параметр установлен в true,то содержимое этого поля будет использоваться как тема электронного письма.',
              'area_trans' => '',
            ),
            'emailHtml' => 
            array (
              'name' => 'emailHtml',
              'desc' => 'prop_formit.emailhtml_desc',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => true,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «email». Необязательный параметр. Этот параметр включает использование html разметки в электронном письме. По умолчанию включено.',
              'area_trans' => '',
            ),
            'emailConvertNewlines' => 
            array (
              'name' => 'emailConvertNewlines',
              'desc' => 'prop_formit.emailconvertnewlines_desc',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => false,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'If true and emailHtml is set to 1, will convert newlines to BR tags in the email.',
              'area_trans' => '',
            ),
            'emailMultiWrapper' => 
            array (
              'name' => 'emailMultiWrapper',
              'desc' => 'prop_formit.emailmultiwrapper_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '[[+value]]',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Will wrap each item in a collection of fields sent via checkboxes/multi-selects. Defaults to just the value.',
              'area_trans' => '',
            ),
            'emailMultiSeparator' => 
            array (
              'name' => 'emailMultiSeparator',
              'desc' => 'prop_formit.emailmultiseparator_desc',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'The default separator for collections of items sent through checkboxes/multi-selects. Defaults to a newline.',
              'area_trans' => '',
            ),
            'fiarTpl' => 
            array (
              'name' => 'fiarTpl',
              'desc' => 'prop_fiar.fiartpl_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder». Обязательный параметр. Имя чанка который будет использоватся как шаблон письма для автоматического ответа.',
              'area_trans' => '',
            ),
            'fiarToField' => 
            array (
              'name' => 'fiarToField',
              'desc' => 'prop_fiar.fiartofield_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 'email',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => ' Хук «FormItAutoResponder».  Поле формы которое будет использовано как адрес на который надо отправить автоматический ответ.',
              'area_trans' => '',
            ),
            'fiarSubject' => 
            array (
              'name' => 'fiarSubject',
              'desc' => 'prop_fiar.fiarsubject_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '[[++site_name]] Auto-Responder',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder». Тема письма.',
              'area_trans' => '',
            ),
            'fiarFrom' => 
            array (
              'name' => 'fiarFrom',
              'desc' => 'prop_fiar.fiarfrom_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder». Необязательный параметр.   Если этот параметр установлен, то он будет определять адрес электронной почты отправителя письма. Если не установлен, то сначала адрес электронной почты будет искаться в данных формы  в поле с именем «email», если это поле не будет найдено, то будет использоваться  адрес электронной почты из системной настройки «emailsender».',
              'area_trans' => '',
            ),
            'fiarFromName' => 
            array (
              'name' => 'fiarFromName',
              'desc' => 'prop_fiar.fiarfromname_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder». Необязательный параметр.  Имя отправителя письма.',
              'area_trans' => '',
            ),
            'fiarReplyTo' => 
            array (
              'name' => 'fiarReplyTo',
              'desc' => 'prop_fiar.fiarreplyto_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder». Необязательный параметр.  Адрес электронной почты для ответа на письмо.',
              'area_trans' => '',
            ),
            'fiarReplyToName' => 
            array (
              'name' => 'fiarReplyToName',
              'desc' => 'prop_fiar.fiarreplytoname_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder». Необязательный параметр.   Имя владельца адреса электронной почты который используется для ответа на письмо.',
              'area_trans' => '',
            ),
            'fiarCC' => 
            array (
              'name' => 'fiarCC',
              'desc' => 'prop_fiar.fiarcc_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder».  Разделённый запятыми список адресов электронной почты на которые надо послать копию письма.',
              'area_trans' => '',
            ),
            'fiarCCName' => 
            array (
              'name' => 'fiarCCName',
              'desc' => 'prop_fiar.fiarccname_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder». Необязательный параметр.  Разделённый запятыми список имён владельцев адресов электронной почты указанных в параметре «emailCC».',
              'area_trans' => '',
            ),
            'fiarBCC' => 
            array (
              'name' => 'fiarBCC',
              'desc' => 'prop_fiar.fiarbcc_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder». Разделённый запятыми список адресов электронной почты на которые надо послать скрытую копию письма.',
              'area_trans' => '',
            ),
            'fiarBCCName' => 
            array (
              'name' => 'fiarBCCName',
              'desc' => 'prop_fiar.fiarbccname_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => '',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder».  Необязательный параметр.  Разделённый запятыми список имён владельцев адресов электронной почты указанных в параметре «emailBCC».',
              'area_trans' => '',
            ),
            'fiarHtml' => 
            array (
              'name' => 'fiarHtml',
              'desc' => 'prop_fiar.fiarhtml_desc',
              'type' => 'combo-boolean',
              'options' => '',
              'value' => true,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «FormItAutoResponder».  Необязательный параметр. Включает или выключает использование html разметки в электронном письме. По умолчанию включено.',
              'area_trans' => '',
            ),
            'mathMinRange' => 
            array (
              'name' => 'mathMinRange',
              'desc' => 'prop_math.mathminrange_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 10,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «math». Минимальный диапазон для каждого числа в примере.',
              'area_trans' => '',
            ),
            'mathMaxRange' => 
            array (
              'name' => 'mathMaxRange',
              'desc' => 'prop_math.mathmaxrange_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 100,
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «math». Максимальный диапазон для каждого числа в примере.',
              'area_trans' => '',
            ),
            'mathField' => 
            array (
              'name' => 'mathField',
              'desc' => 'prop_math.mathfield_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 'math',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «math». Имя поля ввода для ответа.',
              'area_trans' => '',
            ),
            'mathOp1Field' => 
            array (
              'name' => 'mathOp1Field',
              'desc' => 'prop_math.mathop1field_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 'op1',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «math». Имя поля для первого числа в примере.',
              'area_trans' => '',
            ),
            'mathOp2Field' => 
            array (
              'name' => 'mathOp2Field',
              'desc' => 'prop_math.mathop2field_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 'op2',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «math». Имя поля для второго числа в примере.',
              'area_trans' => '',
            ),
            'mathOperatorField' => 
            array (
              'name' => 'mathOperatorField',
              'desc' => 'prop_math.mathoperatorfield_desc',
              'type' => 'textfield',
              'options' => '',
              'value' => 'operator',
              'lexicon' => 'formit:properties',
              'area' => '',
              'desc_trans' => 'Хук «math». Имя поля для оператора в примере.',
              'area_trans' => '',
            ),
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => '',
          'content' => '/**
 * FormIt
 *
 * Copyright 2009-2012 by Shaun McCormick <shaun@modx.com>
 *
 * FormIt is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option) any
 * later version.
 *
 * FormIt is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * FormIt; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package formit
 */
/**
 * FormIt
 *
 * A dynamic form processing Snippet for MODx Revolution.
 *
 * @package formit
 */
require_once $modx->getOption(\'formit.core_path\',null,$modx->getOption(\'core_path\',null,MODX_CORE_PATH).\'components/formit/\').\'model/formit/formit.class.php\';
$fi = new FormIt($modx,$scriptProperties);
$fi->initialize($modx->context->get(\'key\'));
$fi->loadRequest();

$fields = $fi->request->prepare();
return $fi->request->handle($fields);',
        ),
        'policies' => 
        array (
        ),
        'source' => 
        array (
        ),
      ),
    ),
    'modTemplateVar' => 
    array (
    ),
  ),
);