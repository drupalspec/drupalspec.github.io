<?php /* Smarty version 3.1.27, created on 2016-05-01 22:59:56
         compiled from "/Volumes/Media/sianamodx/manager/templates/default/welcome.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:21243515245726603ca4bf65_01775148%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e81dee9c8e0ecf8524e61d0321ff5b9488c64661' => 
    array (
      0 => '/Volumes/Media/sianamodx/manager/templates/default/welcome.tpl',
      1 => 1461218622,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '21243515245726603ca4bf65_01775148',
  'variables' => 
  array (
    'dashboard' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5726603ca4ef78_81235842',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5726603ca4ef78_81235842')) {
function content_5726603ca4ef78_81235842 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '21243515245726603ca4bf65_01775148';
?>
<div id="modx-panel-welcome-div"></div>

<div id="modx-dashboard" class="dashboard">
<?php echo $_smarty_tpl->tpl_vars['dashboard']->value;?>

</div><?php }
}
?>