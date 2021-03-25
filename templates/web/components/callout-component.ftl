<#import "/templates/system/common/cstudio-support.ftl" as studio />
	
	<!-- Lists -->
    <div class="grid flex-grid grid-inner__full">
        <div class="col-6 grid__cell">
            <div class="info-box" id="list-col-3">
                <div class="list-col--lead">
                    <h2 class="title--md no-margin-top">${item.title_s!""}</h2>
                    <a href="${item.url_s}" class="btn btn--primary btn--md understand_finances_home_button" role="button">${item.label_s!""}</a>
                </div>
            </div>
        </div>
    </div>

    <div class="grid flex-grid grid-inner__3c overlap_cols">
        <div class="col-4 grid__cell"></div>
        <div class="col-4 grid__cell margin-bottom--md" id="list-col-1">
            <div class="list-group">
                <ul class="list-group__items">
                    <#if contentModel.listOne_o?? && contentModel.listOne_o.item??>
                        <#list contentModel.listOne_o.item as item>
                            <li>${item.listItem_s!""}</li>
                        </#list>
                    </#if>
                </ul>
            </div>
        </div>
        <div class="col-4 grid__cell" id="list-col-2">
            <div class="list-group">
                <ul class="list-group__items">
                    <#if contentModel.listTwo_o?? && contentModel.listTwo_o.item??>
                        <#list contentModel.listTwo_o.item as item>
                            <li>${item.listItem_s!""}</li>
                        </#list>
                    </#if>
                </ul>
            </div>
        </div>
    </div>
    <!-- end Lists -->
	
<@studio.toolSupport />