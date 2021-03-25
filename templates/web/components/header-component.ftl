<#import "/templates/web/navigation2/navigation.ftl" as nav/>

<div class="container">
    <div class="grid flex-grid grid-inner__4c8c">
        <div class="grid__cell col-6">
            <div class="menu-control">
                <div class="branding">
                    <a href="${model.headerImageUrl_s}">
                        <img src="${model.headerImage_s!""}" alt="${model.title_t!""}">
                    </a>
                </div>
            </div>
        </div>
        <div class="grid__cell col-6">
            <nav class="vc_navigation">
                <ul class="vc_global_nav">
                    <@nav.renderNavigation "/site/website" 1 true/>
                </ul>
            </nav>
        </div>
    </div>
    <div class="toggle">
        <span class="uil uil-bars"></span>
        <span class="uil uil-times"></span>
    </div>
    <div class="overlay"></div>
</div>