<#import "/templates/system/common/cstudio-support.ftl" as studio />

<footer>
    <div class="container footer__container">
        <div class="wide--layout">
            <div class="grid flex-grid grid-inner__4c">
            
                <div class="col-3 grid__cell">
                    <h2 class="text--md footer__title">${model.footercolumnoneTitle_s!""}</h2>
                    <#if contentModel.partnerLinks_o?? && contentModel.partnerLinks_o.item??>
                        <ul class="list-unstyled">
                            <#list model.partnerLinks_o.item as item>
                                <li><a href="${item.url_s}">${item.label_s}</a></li>
                            </#list>
                        </ul>
                    </#if>
                </div>
                
                <div class="col-3 grid__cell">
                    <h2 class="text--md footer__title">${model.footercolumntwoTitle_s!""}</h2>
                    <#if contentModel.newsLinks_o?? && contentModel.newsLinks_o.item??>
                        <ul class="list-unstyled">
                            <#list model.newsLinks_o.item as item>
                                <li><a href="${item.url_s}">${item.label_s}</a></li>
                            </#list>
                        </ul>
                    </#if>
                </div>
                
                <div class="col-3 grid__cell">
                    <h2 class="text--md footer__title">${model.footercolumnthreeTitle_s!""}</h2>
                    <ul>
                        <li><a href="#">Site map</a></li>
                    </ul>
                </div>
                
                <div class="col-3 grid__cell">
                    <h2 class="text--md footer__title">${model.footercolumnfourTitle_s!""}</h2>
                    <ul>
                        <li><a href="mailto:info@velocityclub.co.za">info@velocityclub.co.za</a></li>
                        <li class="social--media-item__whatsapp" style="display: flex; flex-flow: row;">
                            <img src="https://www.velocityclub.co.za/images/whatsapp.svg" alt="" style="margin-right: 16px;">
                            <a href="https://wa.me/270739169367?text=Velocity%20Club%20Expert%20opinions" target="_blank">073 916 9367</a>
                        </li>
                    </ul>
                    <ul class="social--media">
                        <#if contentModel.socialSitesLinks_o?? && contentModel.socialSitesLinks_o.item??>
                            <#list model.socialSitesLinks_o.item as item>
                            <li class="social--media-item">
                                <a href="${item.url_s}">
                                    <i class="clickable fa fa-${item.socialSite_s}"></i>
                                </a>
                            </li>
                            </#list>
                        </#if>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>