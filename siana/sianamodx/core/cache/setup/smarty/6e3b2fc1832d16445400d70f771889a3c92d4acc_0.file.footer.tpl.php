<?php /* Smarty version 3.1.27, created on 2016-05-01 22:59:40
         compiled from "/Volumes/Media/sianamodx/setup/templates/footer.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:15081799595726602c7816f2_26724190%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '6e3b2fc1832d16445400d70f771889a3c92d4acc' => 
    array (
      0 => '/Volumes/Media/sianamodx/setup/templates/footer.tpl',
      1 => 1461218622,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '15081799595726602c7816f2_26724190',
  'variables' => 
  array (
    '_lang' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5726602c7922e5_99940723',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5726602c7922e5_99940723')) {
function content_5726602c7922e5_99940723 ($_smarty_tpl) {
if (!is_callable('smarty_modifier_replace')) require_once '/Volumes/Media/sianamodx/core/model/smarty/plugins/modifier.replace.php';

$_smarty_tpl->properties['nocache_hash'] = '15081799595726602c7816f2_26724190';
?>
        </div>
        <!-- end content -->
        <div class="clear">&nbsp;</div>
    </div>
</div>

<!-- start footer -->
<div id="footer">
    <div id="footer-inner">
    <div class="container_12">
        <p><?php ob_start();
echo date('Y');
$_tmp1=ob_get_clean();
echo smarty_modifier_replace($_smarty_tpl->tpl_vars['_lang']->value['modx_footer1'],'[[+current_year]]',$_tmp1);?>
</p>
        <p><?php echo $_smarty_tpl->tpl_vars['_lang']->value['modx_footer2'];?>
</p>
    </div>
    </div>
</div>

<div class="post_body">

</div>
<!-- end footer -->
</body>
</html><?php }
}
?>