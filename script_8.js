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
                jQuery('#eighth').html("\\(0\\)");
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
            jQuery('#eighth').html("\\(0\\)");
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
            jQuery('#eighth').html("\\(0\\)");
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
            jQuery('#eighth').html("\\(0\\)");
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

jQuery("#Assumptions1").select().on("change", function() {
  var answer = document.getElementById("Assumptions1");
  if (answer.value == "a1") {
    jQuery('#ninth').html("Correct")
    jQuery('#ninth').css('color', 'green');
} else {
    jQuery('#ninth').html("Wrong")
    jQuery('#ninth').css('color', 'red');
  }
  document.getElementById("ninth").style.visibility = "visible";
});

jQuery("#Assumptions2").select().on("change", function() {
  var answer = document.getElementById("Assumptions2");
  if (answer.value == "b2") {
    jQuery('#tenth').html("Correct")
    jQuery('#tenth').css('color', 'green');
} else {
    jQuery('#tenth').html("Wrong")
    jQuery('#tenth').css('color', 'red');
  }
  document.getElementById("tenth").style.visibility = "visible";
});

jQuery("#Assumptions3").select().on("change", function() {
  var answer = document.getElementById("Assumptions3");
  if (answer.value == "c2") {
    jQuery('#eleventh').html("Correct")
    jQuery('#eleventh').css('color', 'green');
} else {
    jQuery('#eleventh').html("Wrong")
    jQuery('#eleventh').css('color', 'red');
  }
  document.getElementById("eleventh").style.visibility = "visible";
});


jQuery("#Assumptions4").select().on("change", function() {
  var answer = document.getElementById("Assumptions4");
  if (answer.value == "d2") {
    jQuery('#twelfth').html("Correct")
    jQuery('#twelfth').css('color', 'green');
} else {
    jQuery('#twelfth').html("Wrong")
    jQuery('#twelfth').css('color', 'red');
  }
  document.getElementById("twelfth").style.visibility = "visible";
});


});

