<#import "/templates/web/layout/default-layout.ftl" as layout/>
<#import "/templates/system/common/cstudio-support.ftl" as studio />
<@layout.default>
    
    <div id="information" class="spacer reserve-info">
        <div class="container">
            <!--<img src="${contentModel.heroImage_o!""}">-->
            <div class="row">
                <div class="col-md-8">
                    ${contentModel.mainRte_html!""}
                </div>
                <div class="col-md-4" <@studio.iceAttr iceGroup="secondRte"/>>
                    ${contentModel.secondRte_html!""}
                </div>
            </div>
        </div>
    </div>
    
</@layout.default>