<#import "/templates/web/layout/default-layout.ftl" as layout/>
<#import "/templates/system/common/cstudio-support.ftl" as studio />
<@layout.default>
    
    <section class="container masthead" <@studio.iceAttr iceGroup="carousels"/>>
        <div class="swiper-container" <@studio.componentContainerAttr target="carousels" objectId=contentModel.objectId/>>
            <#if contentModel.carousels_o?? && contentModel.carousels_o.item??>
                <#list contentModel.carousels_o.item as carousel>
                    <div class="swiper-wrapper">
                        <@renderComponent component=carousel />
                    </div>
                </#list>
            </#if>
        </div>
        <!-- Navigation -->
        <div class="slider-navigation">
            <div class="custom-prev"><span class="uil uil-arrow-left"></span></div>
            <div class="custom-next"><span class="uil uil-arrow-right"></span></div>
        </div>
    </section>
    
    <div id="information" class="spacer reserve-info">
        <div class="container">
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