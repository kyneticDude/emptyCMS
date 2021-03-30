<#import "/templates/web/layout/default-layout.ftl" as layout/>
<#import "/templates/system/common/cstudio-support.ftl" as studio />
<@layout.default>
    
    <!-- Intro -->
    <section class="container section alpha__row" <@studio.iceAttr iceGroup="masthead"/>>
        <div class="wide--layout">
            <div class="grid flex-grid grid-inner__2c grid-order__reverse">
                <div class="col-6 grid__cell align-self__center">
                    <div class="content__pr">
                        <h1 class="title--lg fw-900">${contentModel.mastheadTitle_s!""}</h1>
                        ${contentModel.masthead_content_html!""}
                    </div>
                </div>
                <div class="col-6 grid__cell grid__cell-bitmap grid-mb-mobile">
                    <div class="aspect-ratio">
                        <img src="${contentModel.masthead_image_s!""}" alt="${contentModel.imageAlt_s!""}">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end Intro -->

    <!-- 3 Cols -->
    <section class="container section">

        <div class="wide--layout">
            <div class="grid flex-grid grid-inner__3c grid-gap__all grid-cards__equal">
                <#list post as post>
                    <div class="col-4 grid__cell card bg--white" id="list-col-1b-tall">
                        <div class="card-image">
                            <img src="${postImage}" alt="">
                        </div>
                        <div class="card-header">
                            <p class="text--sm headliner">${post.date_time} | ${post.postDuration} min. read</p>
                            <h2 class="text--lg article-heading-margin">${post.title}</h2>
                        </div>
                        <div class="card-footer">
                            <a href="${post.url}" class="btn btn--primary-text expert_opinions_post_one">Read more</a>
                        </div>
                    </div>
                </#list>
            </div>
        </div>
    </section>
    
</@layout.default>