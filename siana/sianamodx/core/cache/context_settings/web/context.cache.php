<?php  return array (
  'config' => 
  array (
  ),
  'aliasMap' => 
  array (
    'index/' => 1,
    'cart' => 15,
    'index/siana-decotative-enamel/' => 2,
    'index/decotative-enamel/' => 8,
    'index/siana-decotative-enamel/белый' => 4,
    'index/siana-decotative-enamel/бирюзовый' => 5,
    'index/siana-decotative-enamel/розовый' => 6,
    'index/siana-decotative-enamel/золотой' => 7,
    'index/decotative-enamel/белый' => 9,
    'index/decotative-enamel/бирюзовый' => 10,
    'index/decotative-enamel/розовый' => 11,
    'index/decotative-enamel/золотой' => 12,
  ),
  'resourceMap' => 
  array (
    0 => 
    array (
      0 => 1,
      1 => 15,
    ),
    1 => 
    array (
      0 => 2,
      1 => 8,
    ),
    2 => 
    array (
      0 => 4,
      1 => 5,
      2 => 6,
      3 => 7,
    ),
    8 => 
    array (
      0 => 9,
      1 => 10,
      2 => 11,
      3 => 12,
    ),
  ),
  'webLinkMap' => 
  array (
  ),
  'eventMap' => 
  array (
    'msOnChangeOrderStatus' => 
    array (
      2 => '2',
    ),
    'OnChunkFormPrerender' => 
    array (
      9 => '9',
    ),
    'OnDocFormPrerender' => 
    array (
      9 => '9',
    ),
    'OnFileCreateFormPrerender' => 
    array (
      9 => '9',
    ),
    'OnFileEditFormPrerender' => 
    array (
      9 => '9',
    ),
    'OnHandleRequest' => 
    array (
      2 => '2',
    ),
    'OnLoadWebDocument' => 
    array (
      2 => '2',
    ),
    'OnMODXInit' => 
    array (
      3 => '3',
    ),
    'OnPluginFormPrerender' => 
    array (
      9 => '9',
    ),
    'OnRichTextEditorRegister' => 
    array (
      9 => '9',
    ),
    'OnSnipFormPrerender' => 
    array (
      9 => '9',
    ),
    'OnTempFormPrerender' => 
    array (
      9 => '9',
    ),
    'OnWebPageInit' => 
    array (
      2 => '2',
    ),
  ),
  'pluginCache' => 
  array (
    2 => 
    array (
      'id' => '2',
      'source' => '1',
      'property_preprocess' => '0',
      'name' => 'miniShop2',
      'description' => '',
      'editor_type' => '0',
      'category' => '1',
      'cache_type' => '0',
      'plugincode' => 'switch ($modx->event->name) {

	case \'OnManagerPageBeforeRender\':
		$modx23 = !empty($modx->version) && version_compare($modx->version[\'full_version\'], \'2.3.0\', \'>=\');
		$modx->controller->addHtml(\'<script type="text/javascript">
			Ext.onReady(function() {
				MODx.modx23 = \'.(int)$modx23.\';
			});
		</script>\');
		if (!$modx23) {
			$modx->controller->addCss(MODX_ASSETS_URL . \'components/minishop2/css/mgr/bootstrap.min.css\');
		}
		$modx->controller->addCss(MODX_ASSETS_URL . \'components/minishop2/css/mgr/main.css\');
		break;

	case \'OnHandleRequest\':
	case \'OnLoadWebDocument\':
		$isAjax = !empty($_SERVER[\'HTTP_X_REQUESTED_WITH\']) && $_SERVER[\'HTTP_X_REQUESTED_WITH\'] == \'XMLHttpRequest\';

		if (empty($_REQUEST[\'ms2_action\']) || ($isAjax && $modx->event->name != \'OnHandleRequest\') || (!$isAjax && $modx->event->name != \'OnLoadWebDocument\')) {return;}
		$action = trim($_REQUEST[\'ms2_action\']);
		$ctx = !empty($_REQUEST[\'ctx\']) ? (string) $_REQUEST[\'ctx\'] : \'web\';
		if ($ctx != \'web\') {$modx->switchContext($ctx);}

		/* @var miniShop2 $miniShop2 */
		$miniShop2 = $modx->getService(\'minishop2\');
		$miniShop2->initialize($ctx, array(\'json_response\' => $isAjax));
		if (!($miniShop2 instanceof miniShop2)) {
			@session_write_close();
			exit(\'Could not initialize miniShop2\');
		}

		switch ($action) {
			case \'cart/add\': $response = $miniShop2->cart->add(@$_POST[\'id\'], @$_POST[\'count\'], @$_POST[\'options\']); break;
			case \'cart/change\': $response = $miniShop2->cart->change(@$_POST[\'key\'], @$_POST[\'count\']); break;
			case \'cart/remove\': $response = $miniShop2->cart->remove(@$_POST[\'key\']); break;
			case \'cart/clean\': $response = $miniShop2->cart->clean(); break;
			case \'cart/get\': $response = $miniShop2->cart->get(); break;
			case \'order/add\': $response = $miniShop2->order->add(@$_POST[\'key\'], @$_POST[\'value\']); break;
			case \'order/submit\': $response = $miniShop2->order->submit($_POST); break;
			case \'order/getcost\': $response = $miniShop2->order->getcost(); break;
			case \'order/getrequired\': $response = $miniShop2->order->getDeliveryRequiresFields(@$_POST[\'id\']); break;
			case \'order/clean\': $response = $miniShop2->order->clean(); break;
			case \'order/get\': $response = $miniShop2->order->get(); break;
			default:
				$message = ($_REQUEST[\'ms2_action\'] != $action)
					? \'ms2_err_register_globals\'
					: \'ms2_err_unknown\';
				$response = $miniShop2->error($message);
		}

		if ($isAjax) {
			@session_write_close();
			exit($response);
		}
		break;

	case \'OnWebPageInit\':
		/* @var msCustomerProfile $profile */
		$referrerVar = $modx->getOption(\'ms2_referrer_code_var\', null, \'msfrom\', true);
		$cookieVar = $modx->getOption(\'ms2_referrer_cookie_var\', null, \'msreferrer\', true);
		$cookieTime = $modx->getOption(\'ms2_referrer_time\', null, 86400 * 365, true);

		if (!$modx->user->isAuthenticated() && !empty($_REQUEST[$referrerVar])) {
			$code = trim($_REQUEST[$referrerVar]);
			if ($profile = $modx->getObject(\'msCustomerProfile\', array(\'referrer_code\' => $code))) {
				$referrer = $profile->id;
				setcookie($cookieVar, $referrer, time() + $cookieTime);
			}
		}
		elseif ($modx->user->isAuthenticated() && !empty($_COOKIE[$cookieVar])) {
			if ($profile = $modx->getObject(\'msCustomerProfile\', $modx->user->id)) {
				if (!$profile->get(\'referrer_id\') && $_COOKIE[$cookieVar] != $modx->user->id) {
					$profile->set(\'referrer_id\', $_COOKIE[$cookieVar]);
					$profile->save();
				}
			}
			setcookie($cookieVar, \'\', time() - $cookieTime);
		}
		break;

	case \'msOnChangeOrderStatus\':
		if (empty($status) || $status != 2) {return;}

		/** @var modUser $user */
		if ($user = $order->getOne(\'User\')) {
			$q = $modx->newQuery(\'msOrder\', array(\'type\' => 0));
			$q->innerJoin(\'modUser\', \'modUser\', array(\'`modUser`.`id` = `msOrder`.`user_id`\'));
			$q->innerJoin(\'msOrderLog\', \'msOrderLog\', array(
				\'`msOrderLog`.`order_id` = `msOrder`.`id`\',
				\'msOrderLog.action\' => \'status\',
				\'msOrderLog.entry\' => $status,
			));
			$q->where(array(\'msOrder.user_id\' => $user->id));
			$q->groupby(\'msOrder.user_id\');
			$q->select(\'SUM(`msOrder`.`cost`)\');
			if ($q->prepare() && $q->stmt->execute()) {
				$spent = $q->stmt->fetch(PDO::FETCH_COLUMN);
				/** @var msCustomerProfile $profile */
				if ($profile = $modx->getObject(\'msCustomerProfile\', $user->id)) {
					$profile->set(\'spent\', $spent);
					$profile->save();
				}
			}
		}
		break;
}',
      'locked' => '0',
      'properties' => NULL,
      'disabled' => '0',
      'moduleguid' => '',
      'static' => '0',
      'static_file' => 'core/components/minishop2/elements/plugins/plugin.minishop2.php',
    ),
    3 => 
    array (
      'id' => '3',
      'source' => '1',
      'property_preprocess' => '0',
      'name' => 'pdoTools',
      'description' => '',
      'editor_type' => '0',
      'category' => '2',
      'cache_type' => '0',
      'plugincode' => 'switch ($modx->event->name) {

    case \'OnMODXInit\':
        $fqn = $modx->getOption(\'pdoTools.class\', null, \'pdotools.pdotools\', true);
        $path = $modx->getOption(\'pdotools_class_path\', null, MODX_CORE_PATH . \'components/pdotools/model/\', true);
        $modx->loadClass($fqn, $path, false, true);

        $fqn = $modx->getOption(\'pdoFetch.class\', null, \'pdotools.pdofetch\', true);
        $path = $modx->getOption(\'pdofetch_class_path\', null, MODX_CORE_PATH . \'components/pdotools/model/\', true);
        $modx->loadClass($fqn, $path, false, true);
        break;

}',
      'locked' => '0',
      'properties' => NULL,
      'disabled' => '0',
      'moduleguid' => '',
      'static' => '0',
      'static_file' => 'core/components/pdotools/elements/plugins/plugin.pdotools.php',
    ),
    9 => 
    array (
      'id' => '9',
      'source' => '0',
      'property_preprocess' => '0',
      'name' => 'Ace',
      'description' => 'Ace code editor plugin for MODx Revolution',
      'editor_type' => '0',
      'category' => '0',
      'cache_type' => '0',
      'plugincode' => '/**
 * Ace Source Editor Plugin
 *
 * Events: OnManagerPageBeforeRender, OnRichTextEditorRegister, OnSnipFormPrerender,
 * OnTempFormPrerender, OnChunkFormPrerender, OnPluginFormPrerender,
 * OnFileCreateFormPrerender, OnFileEditFormPrerender, OnDocFormPrerender
 *
 * @author Danil Kostin <danya.postfactum(at)gmail.com>
 *
 * @package ace
 *
 * @var array $scriptProperties
 * @var Ace $ace
 */
if ($modx->event->name == \'OnRichTextEditorRegister\') {
    $modx->event->output(\'Ace\');
    return;
}

if ($modx->getOption(\'which_element_editor\', null, \'Ace\') !== \'Ace\') {
    return;
}

$ace = $modx->getService(\'ace\', \'Ace\', $modx->getOption(\'ace.core_path\', null, $modx->getOption(\'core_path\').\'components/ace/\').\'model/ace/\');
$ace->initialize();

$extensionMap = array(
    \'tpl\'   => \'text/x-smarty\',
    \'htm\'   => \'text/html\',
    \'html\'  => \'text/html\',
    \'css\'   => \'text/css\',
    \'scss\'  => \'text/x-scss\',
    \'less\'  => \'text/x-less\',
    \'svg\'   => \'image/svg+xml\',
    \'xml\'   => \'application/xml\',
    \'xsl\'   => \'application/xml\',
    \'js\'    => \'application/javascript\',
    \'json\'  => \'application/json\',
    \'php\'   => \'application/x-php\',
    \'sql\'   => \'text/x-sql\',
    \'md\'    => \'text/x-markdown\',
    \'txt\'   => \'text/plain\',
    \'twig\'  => \'text/x-twig\'
);

// Defines wether we should highlight modx tags
$modxTags = false;
switch ($modx->event->name) {
    case \'OnSnipFormPrerender\':
        $field = \'modx-snippet-snippet\';
        $mimeType = \'application/x-php\';
        break;
    case \'OnTempFormPrerender\':
        $field = \'modx-template-content\';
        $modxTags = true;

        switch (true) {
            case $modx->getOption(\'twiggy_class\'):
                $mimeType = \'text/x-twig\';
                break;
            case $modx->getOption(\'pdotools_fenom_parser\'):
                $mimeType = \'text/x-smarty\';
                break;
            default:
                $mimeType = \'text/html\';
                break;
        }

        break;
    case \'OnChunkFormPrerender\':
        $field = \'modx-chunk-snippet\';
        if ($modx->controller->chunk && $modx->controller->chunk->isStatic()) {
            $extension = pathinfo($modx->controller->chunk->getSourceFile(), PATHINFO_EXTENSION);
            $mimeType = isset($extensionMap[$extension]) ? $extensionMap[$extension] : \'text/plain\';
        } else {
            $mimeType = \'text/html\';
        }
        $modxTags = true;

        switch (true) {
            case $modx->getOption(\'twiggy_class\'):
                $mimeType = \'text/x-twig\';
                break;
            case $modx->getOption(\'pdotools_fenom_default\'):
                $mimeType = \'text/x-smarty\';
                break;
            default:
                $mimeType = \'text/html\';
                break;
        }

        break;
    case \'OnPluginFormPrerender\':
        $field = \'modx-plugin-plugincode\';
        $mimeType = \'application/x-php\';
        break;
    case \'OnFileCreateFormPrerender\':
        $field = \'modx-file-content\';
        $mimeType = \'text/plain\';
        break;
    case \'OnFileEditFormPrerender\':
        $field = \'modx-file-content\';
        $extension = pathinfo($scriptProperties[\'file\'], PATHINFO_EXTENSION);
        $mimeType = isset($extensionMap[$extension])
            ? $extensionMap[$extension]
            : \'text/plain\';
        $modxTags = $extension == \'tpl\';
        break;
    case \'OnDocFormPrerender\':
        if (!$modx->controller->resourceArray) {
            return;
        }
        $field = \'ta\';
        $mimeType = $modx->getObject(\'modContentType\', $modx->controller->resourceArray[\'content_type\'])->get(\'mime_type\');

        switch (true) {
            case $mimeType == \'text/html\' && $modx->getOption(\'twiggy_class\'):
                $mimeType = \'text/x-twig\';
                break;
            case $mimeType == \'text/html\' && $modx->getOption(\'pdotools_fenom_parser\'):
                $mimeType = \'text/x-smarty\';
                break;
        }

        if ($modx->getOption(\'use_editor\')){
            $richText = $modx->controller->resourceArray[\'richtext\'];
            $classKey = $modx->controller->resourceArray[\'class_key\'];
            if ($richText || in_array($classKey, array(\'modStaticResource\',\'modSymLink\',\'modWebLink\',\'modXMLRPCResource\'))) {
                $field = false;
            }
        }
        $modxTags = true;
        break;
    default:
        return;
}

$modxTags = (int) $modxTags;
$script = \'\';
if ($field) {
    $script .= "MODx.ux.Ace.replaceComponent(\'$field\', \'$mimeType\', $modxTags);";
}

if ($modx->event->name == \'OnDocFormPrerender\' && !$modx->getOption(\'use_editor\')) {
    $script .= "MODx.ux.Ace.replaceTextAreas(Ext.query(\'.modx-richtext\'));";
}

if ($script) {
    $modx->controller->addHtml(\'<script>Ext.onReady(function() {\' . $script . \'});</script>\');
}',
      'locked' => '0',
      'properties' => NULL,
      'disabled' => '0',
      'moduleguid' => '',
      'static' => '0',
      'static_file' => 'ace/elements/plugins/ace.plugin.php',
    ),
  ),
  'policies' => 
  array (
    'modAccessContext' => 
    array (
      'web' => 
      array (
        0 => 
        array (
          'principal' => 0,
          'authority' => 9999,
          'policy' => 
          array (
            'load' => true,
          ),
        ),
        1 => 
        array (
          'principal' => 1,
          'authority' => 0,
          'policy' => 
          array (
            'about' => true,
            'access_permissions' => true,
            'actions' => true,
            'change_password' => true,
            'change_profile' => true,
            'charsets' => true,
            'class_map' => true,
            'components' => true,
            'content_types' => true,
            'countries' => true,
            'create' => true,
            'credits' => true,
            'customize_forms' => true,
            'dashboards' => true,
            'database' => true,
            'database_truncate' => true,
            'delete_category' => true,
            'delete_chunk' => true,
            'delete_context' => true,
            'delete_document' => true,
            'delete_eventlog' => true,
            'delete_plugin' => true,
            'delete_propertyset' => true,
            'delete_role' => true,
            'delete_snippet' => true,
            'delete_template' => true,
            'delete_tv' => true,
            'delete_user' => true,
            'directory_chmod' => true,
            'directory_create' => true,
            'directory_list' => true,
            'directory_remove' => true,
            'directory_update' => true,
            'edit_category' => true,
            'edit_chunk' => true,
            'edit_context' => true,
            'edit_document' => true,
            'edit_locked' => true,
            'edit_plugin' => true,
            'edit_propertyset' => true,
            'edit_role' => true,
            'edit_snippet' => true,
            'edit_template' => true,
            'edit_tv' => true,
            'edit_user' => true,
            'element_tree' => true,
            'empty_cache' => true,
            'error_log_erase' => true,
            'error_log_view' => true,
            'export_static' => true,
            'file_create' => true,
            'file_list' => true,
            'file_manager' => true,
            'file_remove' => true,
            'file_tree' => true,
            'file_update' => true,
            'file_upload' => true,
            'file_unpack' => true,
            'file_view' => true,
            'flush_sessions' => true,
            'frames' => true,
            'help' => true,
            'home' => true,
            'import_static' => true,
            'languages' => true,
            'lexicons' => true,
            'list' => true,
            'load' => true,
            'logout' => true,
            'logs' => true,
            'menus' => true,
            'menu_reports' => true,
            'menu_security' => true,
            'menu_site' => true,
            'menu_support' => true,
            'menu_system' => true,
            'menu_tools' => true,
            'menu_user' => true,
            'messages' => true,
            'namespaces' => true,
            'new_category' => true,
            'new_chunk' => true,
            'new_context' => true,
            'new_document' => true,
            'new_document_in_root' => true,
            'new_plugin' => true,
            'new_propertyset' => true,
            'new_role' => true,
            'new_snippet' => true,
            'new_static_resource' => true,
            'new_symlink' => true,
            'new_template' => true,
            'new_tv' => true,
            'new_user' => true,
            'new_weblink' => true,
            'packages' => true,
            'policy_delete' => true,
            'policy_edit' => true,
            'policy_new' => true,
            'policy_save' => true,
            'policy_template_delete' => true,
            'policy_template_edit' => true,
            'policy_template_new' => true,
            'policy_template_save' => true,
            'policy_template_view' => true,
            'policy_view' => true,
            'property_sets' => true,
            'providers' => true,
            'publish_document' => true,
            'purge_deleted' => true,
            'remove' => true,
            'remove_locks' => true,
            'resource_duplicate' => true,
            'resourcegroup_delete' => true,
            'resourcegroup_edit' => true,
            'resourcegroup_new' => true,
            'resourcegroup_resource_edit' => true,
            'resourcegroup_resource_list' => true,
            'resourcegroup_save' => true,
            'resourcegroup_view' => true,
            'resource_quick_create' => true,
            'resource_quick_update' => true,
            'resource_tree' => true,
            'save' => true,
            'save_category' => true,
            'save_chunk' => true,
            'save_context' => true,
            'save_document' => true,
            'save_plugin' => true,
            'save_propertyset' => true,
            'save_role' => true,
            'save_snippet' => true,
            'save_template' => true,
            'save_tv' => true,
            'save_user' => true,
            'search' => true,
            'settings' => true,
            'sources' => true,
            'source_delete' => true,
            'source_edit' => true,
            'source_save' => true,
            'source_view' => true,
            'steal_locks' => true,
            'tree_show_element_ids' => true,
            'tree_show_resource_ids' => true,
            'undelete_document' => true,
            'unlock_element_properties' => true,
            'unpublish_document' => true,
            'usergroup_delete' => true,
            'usergroup_edit' => true,
            'usergroup_new' => true,
            'usergroup_save' => true,
            'usergroup_user_edit' => true,
            'usergroup_user_list' => true,
            'usergroup_view' => true,
            'view' => true,
            'view_category' => true,
            'view_chunk' => true,
            'view_context' => true,
            'view_document' => true,
            'view_element' => true,
            'view_eventlog' => true,
            'view_offline' => true,
            'view_plugin' => true,
            'view_propertyset' => true,
            'view_role' => true,
            'view_snippet' => true,
            'view_sysinfo' => true,
            'view_template' => true,
            'view_tv' => true,
            'view_unpublished' => true,
            'view_user' => true,
            'workspaces' => true,
          ),
        ),
      ),
    ),
  ),
);