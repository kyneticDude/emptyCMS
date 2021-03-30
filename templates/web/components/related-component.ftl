<#import "/templates/system/common/cstudio-support.ftl" as studio />
	
	<#if posts?? && posts?size &gt; 0>
    	<section class="container margin-bottom--md">
    
            <div class="wide--layout">
                <div class="grid flex-grid grid-inner__3c grid-gap__all grid-cards__equal">
                    <#list posts as post>
                        <div class="col-4 grid__cell card bg--white">
                            <div class="card-image">
                                <img src="${post.image_s}" alt="${post.imageAlt}">
                            </div>
                            <div class="card-header">
                                <p class="text--sm headliner">${post.date_dt} | ${post.readDuration_s} min. read</p>
                                <h2 class="text--lg no-margin-top">${post.title_s}</h2>
                            </div>
                            <div class="card-footer">
                                <a href="${post.title_s}" class="btn btn--primary-text to_post_one_from_post_three_button">Read more</a>
                            </div>
                        </div>
                    </#list>
                </div>
            </div>
        </section>
	</#if>
	<@studio.toolSupport />