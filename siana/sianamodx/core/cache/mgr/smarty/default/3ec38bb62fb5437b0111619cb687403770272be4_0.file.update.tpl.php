<?php /* Smarty version 3.1.27, created on 2016-05-01 23:35:26
         compiled from "/Volumes/Media/sianamodx/manager/templates/default/element/snippet/update.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:3557363895726688eb53855_41022337%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3ec38bb62fb5437b0111619cb687403770272be4' => 
    array (
      0 => '/Volumes/Media/sianamodx/manager/templates/default/element/snippet/update.tpl',
      1 => 1461218620,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3557363895726688eb53855_41022337',
  'variables' => 
  array (
    'onSnipFormPrerender' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5726688eb56496_93496447',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5726688eb56496_93496447')) {
function content_5726688eb56496_93496447 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '3557363895726688eb53855_41022337';
?>
<div id="modx-panel-snippet-div"></div>
<?php echo $_smarty_tpl->tpl_vars['onSnipFormPrerender']->value;

}
}
?>