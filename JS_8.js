jQuery(document).ready(function() {

    jQuery('#first').on('click', function() {

        if(jQuery('#first').attr('data-click-state') == 1) {
            jQuery('#first').attr('data-click-state', 0);
            jQuery('#first').html("\\(\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}\\)");
            jQuery('#first').css('color', 'red');
            document.getElementById("myform1").style.visibility = "visible";

            if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
                MathJax.startup.defaultReady(); 
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial w} \\over {\\partial z}}  = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} = 0\\)");
                MathJax.startup.defaultReady();
            }

            else {
                jQuery('#eighth').html("\\(0 = 0\\)");
                MathJax.startup.defaultReady();
            }
        }
        
        else  {
            jQuery('#first').attr('data-click-state', 1);
            jQuery('#first').html("\\({{\\partial \\rho} \\over {\\partial t}}\\)");
            jQuery('#first').css('color', 'black');
            document.getElementById("myform1").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";

            if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} = 0\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} = 0\\)");
                MathJax.startup.defaultReady();
            }

            else {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  = 0\\)");
                MathJax.startup.defaultReady();
            }
        }

    });

jQuery('#third').on('click', function() {

    if(jQuery('#third').attr('data-click-state') == 1) {
        jQuery('#third').attr('data-click-state', 0);
        jQuery('#third').html("\\(\\require{cancel}\\cancelto{0} {{\\partial u} \\over {\\partial x}}\\)");
        jQuery('#third').css('color', 'red');
        document.getElementById("myform2").style.visibility = "visible";

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial v} \\over {\\partial y}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\(0 = 0\\)");
            MathJax.startup.defaultReady();
        }
    }

    else  {
        jQuery('#third').attr('data-click-state', 1);
        jQuery('#third').html("\\({{\\partial u} \\over {\\partial x}}\\)");
        jQuery('#third').css('color', 'black');
        document.getElementById("myform2").style.visibility = "hidden";
        document.getElementById("tenth").style.visibility = "hidden";

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}}  = 0\\)");
            MathJax.startup.defaultReady();
        }
    }

});

jQuery('#fourth').on('click', function() {

    if(jQuery('#fourth').attr('data-click-state') == 1) {
        jQuery('#fourth').attr('data-click-state', 0);
        jQuery('#fourth').html("\\(\\require{cancel}\\cancelto{0} {{\\partial v} \\over {\\partial y}}\\)");
        jQuery('#fourth').css('color', 'red');
        document.getElementById("myform3").style.visibility = "visible";

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\(0 = 0\\)");
            MathJax.startup.defaultReady();
        }
    }

    else  {
        jQuery('#fourth').attr('data-click-state', 1);
        jQuery('#fourth').html("\\({{\\partial v} \\over {\\partial y}}\\)");
        jQuery('#fourth').css('color', 'black');
        document.getElementById("myform3").style.visibility = "hidden";
        document.getElementById("eleventh").style.visibility = "hidden";

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}}  = 0\\)");
            MathJax.startup.defaultReady();
        }
    }

});


jQuery('#sixth').on('click', function() {

    if(jQuery('#sixth').attr('data-click-state') == 1) {
        jQuery('#sixth').attr('data-click-state', 0);
        jQuery('#sixth').html("\\(\\require{cancel}\\cancelto{0} {{\\partial w} \\over {\\partial z}}\\)");
        jQuery('#sixth').css('color', 'red');
        document.getElementById("myform4").style.visibility = "visible";

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\(0=0\\)");
            MathJax.startup.defaultReady();
        }
    }

    else  {
        jQuery('#sixth').attr('data-click-state', 1);
        jQuery('#sixth').html("\\({{\\partial w} \\over {\\partial z}}\\)");
        jQuery('#sixth').css('color', 'black');
        document.getElementById("myform4").style.visibility = "hidden";
        document.getElementById("twelfth").style.visibility = "hidden";

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial w} \\over {\\partial z}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}} = 0\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\({{\\partial w} \\over {\\partial z}}  = 0\\)");
            MathJax.startup.defaultReady();
        }
    }

});

first_section = 1;
Assumptions1_check = 0;
Assumptions2_check = 0;
Assumptions3_check = 0;
Assumptions4_check = 0;

jQuery("#Assumptions1").select().on("change", function() {
  var answer = document.getElementById("Assumptions1");
  if (answer.value == "a1") {
    jQuery('#ninth').html("Correct")
    jQuery('#ninth').css('color', 'green');
	if(Assumptions1_check == 0){
		first_section += 1;
		Assumptions1_check = 1;
	}
	
} else {
    jQuery('#ninth').html("Wrong")
    jQuery('#ninth').css('color', 'red');
	if(Assumptions1_check == 1){
		first_section -= 1;
		Assumptions1_check = 0;
	}
  }
  document.getElementById("ninth").style.visibility = "visible";
  if(first_section == 4){jQuery("#nineteenth").show();} else{jQuery(".final").hide();jQuery("#nineteenth").hide();}
  
  
});

jQuery("#Assumptions2").select().on("change", function() {
  var answer = document.getElementById("Assumptions2");
  if (answer.value == "b2") {
    jQuery('#tenth').html("Correct")
    jQuery('#tenth').css('color', 'green');
	
	if(Assumptions2_check == 0){
		first_section += 1;
		Assumptions2_check = 1;
	}
} else {
    jQuery('#tenth').html("Wrong")
    jQuery('#tenth').css('color', 'red');
	
	if(Assumptions2_check == 1){
		first_section -= 1;
		Assumptions2_check = 0;
	}
  }
  document.getElementById("tenth").style.visibility = "visible";
  if(first_section == 4){jQuery("#nineteenth").show();} else{jQuery(".final").hide();jQuery("#nineteenth").hide();}
});

jQuery("#Assumptions3").select().on("change", function() {
  var answer = document.getElementById("Assumptions3");
  if (answer.value == "c2") {
    jQuery('#eleventh').html("Wrong")
    jQuery('#eleventh').css('color', 'red');
	
	
	if(Assumptions3_check == 0){
		first_section += 0;
		Assumptions3_check = 0;
	}
	
} else {
    jQuery('#eleventh').html("Wrong")
    jQuery('#eleventh').css('color', 'red');
	
	
	if(Assumptions3_check == 1){
		first_section -= 1;
		Assumptions3_check = 0;
	}
  }
  document.getElementById("eleventh").style.visibility = "visible";
  if(first_section == 4){jQuery("#nineteenth").show();} else{jQuery(".final").hide();jQuery("#nineteenth").hide();}
});


jQuery("#Assumptions4").select().on("change", function() {
	
	
  var answer = document.getElementById("Assumptions4");
  if (answer.value == "d2") {
    jQuery('#twelfth').html("Correct")
    jQuery('#twelfth').css('color', 'green');
	if(Assumptions4_check == 0){
		first_section += 1;
		Assumptions4_check = 1;
	}
	
} else {
    jQuery('#twelfth').html("Wrong")
    jQuery('#twelfth').css('color', 'red');
	
	if(Assumptions4_check == 1){
		first_section -= 1;
		Assumptions4_check = 0;
	}
  }
  document.getElementById("twelfth").style.visibility = "visible";
  if(first_section == 4){jQuery("#nineteenth").show();} else{jQuery(".final").hide();jQuery("#nineteenth").hide();}
});



});


secound_section = 1;
checkbox1_check = 0;
checkbox2_check = 0;
checkbox3_check = 0;
checkbox4_check = 0;


function myFunction1() {
  var checkBox1 = document.getElementById("checkbox1");
  var text1 = document.getElementById("thirteenth");
  if (checkBox1.checked == true){
    text1.style.visibility = "visible";
    jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancelto{0}{t})\\)");
    MathJax.startup.defaultReady();
	
	if(checkbox1_check == 0){
		secound_section += 1;
		checkbox1_check = 1;
	}
  } else {
     text1.style.visibility = "hidden";
     jQuery('#seventeenth').html("\\(v = v(x,y,z,t)\\)")
     MathJax.startup.defaultReady();
	 
	 if(checkbox1_check == 1){
		secound_section -= 1;
		checkbox1_check = 0;
	}
  }
   if(secound_section == 4){jQuery(".final").show();} else{jQuery(".final").hide();}
  
}

function myFunction2() {
  var checkBox2 = document.getElementById("checkbox2");
  var text2 = document.getElementById("fourteenth");
  if (checkBox2.checked == true){
    text2.style.visibility = "visible";
    jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,\\cancelto{0}{t})\\)");
    MathJax.startup.defaultReady();
	
	if(checkbox2_check == 0){
		secound_section += 1;
		checkbox2_check = 1;
	}
  } else {
     text2.style.visibility = "hidden";
     jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancelto{0}{t})\\)");
     MathJax.startup.defaultReady();
	 
	 if(checkbox2_check == 1){
		secound_section -= 1;
		checkbox2_check = 0;
	}
  }
  
  if(secound_section == 4){jQuery(".final").show();} else{jQuery(".final").hide();}
}

function myFunction3() {
  var checkBox3 = document.getElementById("checkbox3");
  var text3 = document.getElementById("fifteenth");
  if (checkBox3.checked == true){
    text3.style.visibility = "visible";
	if(checkbox3_check == 0){
		secound_section -= 1;
		checkbox3_check = 1;
	}
  } else {
     text3.style.visibility = "hidden";
	 
	if(checkbox3_check == 1){
		secound_section += 1;
		checkbox3_check = 0;
	}
	
  }  
  if(secound_section == 4){jQuery(".final").show();} else{jQuery(".final").hide();}
}

function myFunction4() {
  var checkBox4 = document.getElementById("checkbox4");
  var text4 = document.getElementById("sixteenth");
  if (checkBox4.checked == true){
    text4.style.visibility = "visible";
    jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
    MathJax.startup.defaultReady();
	
	if(checkbox4_check == 0){
		secound_section += 1;
		checkbox4_check = 1;
	}
  } else {
     text4.style.visibility = "hidden";
         jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,\\cancelto{0}{t})\\)");
    MathJax.startup.defaultReady();
	
	if(checkbox4_check == 1){
		secound_section -= 1;
		checkbox4_check = 0;
	}
  }
   if(secound_section == 4){jQuery(".final").show();} else{jQuery(".final").hide();}
}

