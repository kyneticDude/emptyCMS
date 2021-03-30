<#import "/templates/system/common/cstudio-support.ftl" as studio />
	
	<#import "/templates/web/layout/default-layout.ftl" as layout/>
    <#import "/templates/system/common/cstudio-support.ftl" as studio />
    <@layout.default>
        
        <!-- Intro -->
        <section class="container pt122pb0">
            <div class="wide--layout">
                <div class="grid flex-grid grid-inner__2c grid-order__reverse" <@studio.iceAttr iceGroup="post-meta"/>>
                    <div class="col-6 grid__cell align-self__center">
                        <div class="content__pr">
                            <p class="text--sm headliner">${contentModel.date_dt!""} | ${contentModel.readDuration!""} min. read</p>
                            <h1 class="title--lg no-margin-top">${contentModel.postTitle!""}</h1>
                        </div>
                    </div>
                    <div class="col-6 grid__cell grid__cell-bitmap grid-mb-mobile">
                        <div class="aspect-ratio">
                            <img src="${contentModel.image_s!""}" alt="${contentModel.imageAlt_s}">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end Intro -->
    
        <section class="container">
            <div class="wide--layout">
                <div class="grid grid-inner__full social-share__grid">
                    <div class="grid__cell">
                        <div class="social-share__row">
                            <h3 class="text--md" style="color: #7b7a7d;">Share this</h3>
                            <ul class="social-share__list" <@studio.iceAttr iceGroup="post-meta"/>>
                                <li class="social-share__list-item">
                                    <a href="https://www.facebook.com/sharer.php?u=https://velocityclub.co.za/expert-opinions/${contentModel.postTitle!""}" class="share" title="Facebook share" target="_blank"><span class="uil uil-facebook"></span></a>
                                </li>
                                <li class="social-share__list-item">
                                    <a href="https://twitter.com/share?url=https://velocityclub.co.za/expert-opinions/${contentModel.postTitle!""}&amp;text=Share popup on &amp;hashtags=velocityclub" class="share" title="Twitter share" target="_blank"><span class="uil uil-twitter"></span></a>
                                </li>
                                <li class="social-share__list-item">
                                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://velocityclub.co.za/expert-opinions/${contentModel.postTitle!""}" class="share" title="linkedin share" target="_blank"><span class="uil uil-linkedin"></span></a>
                                </li>
                                <li class="social-share__list-item">
                                    <a href="mailto:info@velocityclub.co.za?subject=https://velocityclub.co.za/expert-opinions/${contentModel.postTitle!""}"><span class="uil uil-envelope"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <!-- Article top -->
        <#list contentModel.sections_o.item as item>
            <section class="container" <@studio.iceAttr iceGroup="post"/>>
                <div class="wide--layout">
                    <div class="grid flex-grid grid-inner__article no-margin-top">
                        <div class="grid__cell">
                            ${item.section_html}
                        </div>
                    </div>
                </div>
            </section>
        </#list>
        <!-- end Article top -->
        
        
    </@layout.default>
	