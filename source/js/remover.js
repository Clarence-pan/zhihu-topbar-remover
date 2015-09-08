;(function(){
    var config = {
        showFixedNotice: true
    };

    if (removeTopBar() && config.showFixedNotice){
        var hasRemoved = true;
        var $fixerNotice = $('<a id="zhihu-top-bar-remover-notice" class="active" href="javascript:void(0)" title="Top-bar Removed" >&nbsp;</a>');
        $fixerNotice.on('click', function(){
            var $this = $(this);
            hasRemoved = !hasRemoved;
            removeTopBar({revert: !hasRemoved});
            $this.attr('title', hasRemoved ? 'Top-bar Removed' : 'The Original');
            $this.toggleClass('active', hasRemoved);
        });
        $fixerNotice.appendTo('body');
    }

    /**
     * 修复页面
     * @param opt object {revert: 是否回退 }
     */
    function removeTopBar(opt){
        opt = $.extend({
            revert: false
        }, opt || {});

        if (/zhihu\.com$/.test(window.location.host)){
            $('.zu-top,.zu-main-sidebar').toggleClass('remover-reverted', opt.revert);
            return true;
        }

        return false;
    }
})();