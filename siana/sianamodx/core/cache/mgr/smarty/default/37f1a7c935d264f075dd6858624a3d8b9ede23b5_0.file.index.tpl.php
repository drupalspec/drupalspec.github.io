<?php /* Smarty version 3.1.27, created on 2016-05-01 23:00:02
         compiled from "/Volumes/Media/sianamodx/manager/templates/default/workspaces/index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:486121207572660420d7993_21435495%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '37f1a7c935d264f075dd6858624a3d8b9ede23b5' => 
    array (
      0 => '/Volumes/Media/sianamodx/manager/templates/default/workspaces/index.tpl',
      1 => 1461218622,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '486121207572660420d7993_21435495',
  'variables' => 
  array (
    'error' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_572660420dfa84_04788631',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_572660420dfa84_04788631')) {
function content_572660420dfa84_04788631 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '486121207572660420d7993_21435495';
echo (($tmp = @$_smarty_tpl->tpl_vars['error']->value)===null||$tmp==='' ? '' : $tmp);?>

<div id="modx-panel-workspace-div"></div>
<?php }
}
?>