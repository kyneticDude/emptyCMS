<#import "/templates/system/common/cstudio-support.ftl" as studio />

<footer class="spacer">
    <div class="container">
        <div class="row">
            
            <div class="col-sm-5">
                <h4>${model.descriptionTitle_s!""}</h4>
                <div>${model.description_html!!""}</div>
            </div>
            
            <div class="col-sm-3">
                <h4>${model.quickLinksTitle_s!""}</h4>
                <#if contentModel.quickLinks_o?? && contentModel.quickLinks_o.item??>
                    <ul class="list-unstyled">
                        <#list model.quickLinks_o.item as item>
                            <li><a href="${item.url_s}">${item.label_s}</a></li>
                        </#list>
                    </ul>
                </#if>
            </div>
            
            <div class="col-sm-3 subscribe">
                <div class="social">
                    <#if contentModel.socialSitesLinks_o?? && contentModel.socialSitesLinks_o.item??>
                        <#list model.socialSitesLinks_o.item as item>
                            <a href="${item.url_s}">
                                <i class="clickable fa fa-${item.socialSite_s}"></i>
                            </a>
                        </#list>
                    </#if>
                </div>
            </div>
            
        </div>
    </div>
</footer>