<#import "/templates/system/common/cstudio-support.ftl" as studio />
	...
	<@studio.toolSupport />
	
	<#if contentModel.slide_o?? && contentModel.slide_o.item??>
	    <#list contentModel.slide_o.item as slideItem>
	        <!-- Slide 1 -->
            <div class="swiper-slide">
                <section class="grid grid-inner__full no-margin-top no-margin-bottom" id="${slideItem.slideId_s!""}" title="${slideItem.slideSeo}">
                    <div class="grid__cell grid-inner__masthead">
                        <div class="grid-inner__masthead-content">
                            <h2 class="text--sm headliner">financial planning</h2>
                            <h1 class="title--lg masthead-title">Guiding you to a worry-free future.</h1>
                            <p class="mx-16x40"><strong>Make smart money decisions</strong> with a Velocity Club financial expert to guide you.</p>
                            <a href="" class="btn btn--primary btn--lg get__started carousel_fin-checkup_button" role="button">Schedule a session</a>
                        </div>
                    </div>
                </section>
            </div>
	    </#list>
	</#if>