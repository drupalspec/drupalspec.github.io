<?php /* Smarty version 3.1.27, created on 2016-05-02 12:29:09
         compiled from "/Volumes/Media/sianamodx/manager/templates/default/element/snippet/create.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:148365214457271de57c6836_88810717%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '97fa6f793f7b031adecedbf104d687638b0440f3' => 
    array (
      0 => '/Volumes/Media/sianamodx/manager/templates/default/element/snippet/create.tpl',
      1 => 1461218620,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '148365214457271de57c6836_88810717',
  'variables' => 
  array (
    'onSnipFormPrerender' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_57271de57e6221_15888658',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_57271de57e6221_15888658')) {
function content_57271de57e6221_15888658 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '148365214457271de57c6836_88810717';
?>
<div id="modx-panel-snippet-div"></div>
<?php echo $_smarty_tpl->tpl_vars['onSnipFormPrerender']->value;

}
}
?>