$(document).ready(function() {

    $('#first').on('click', function() {

        if($('#first').attr('data-click-state') == 1) {
            $('#first').attr('data-click-state', 0);
            $('#first').html("\\(\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}\\)");
            $('#first').css('color', 'red');
            document.getElementById("myform1").style.visibility = "visible";

                if(($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else {
                $('#eighth').html("$$0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }
        }
        
        else  {
            $('#first').attr('data-click-state', 1);
            $('#first').html("\\({{\\partial \\rho} \\over {\\partial t}}\\)");
            $('#first').css('color', 'black');
            document.getElementById("myform1").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
                
                if(($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }
        }

    });

    $('#third').on('click', function() {

        if($('#third').attr('data-click-state') == 1) {
            $('#third').attr('data-click-state', 0);
            $('#third').html("\\(\\require{cancel}\\cancelto{0} {{\\partial u} \\over {\\partial x}}\\)");
            $('#third').css('color', 'red');
            document.getElementById("myform2").style.visibility = "visible";

                if(($('#first').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}}  + {{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else {
                $('#eighth').html("$$0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }
        }
        
        else  {
            $('#third').attr('data-click-state', 1);
            $('#third').html("\\({{\\partial u} \\over {\\partial x}}\\)");
            $('#third').css('color', 'black');
            document.getElementById("myform2").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
                
                if(($('#first').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }
        }

    });

    $('#fourth').on('click', function() {

        if($('#fourth').attr('data-click-state') == 1) {
            $('#fourth').attr('data-click-state', 0);
            $('#fourth').html("\\(\\require{cancel}\\cancelto{0} {{\\partial v} \\over {\\partial y}}\\)");
            $('#fourth').css('color', 'red');
            document.getElementById("myform3").style.visibility = "visible";

                if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else {
                $('#eighth').html("$$0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }
        }
        
        else  {
            $('#fourth').attr('data-click-state', 1);
            $('#fourth').html("\\({{\\partial v} \\over {\\partial y}}\\)");
            $('#fourth').css('color', 'black');
            document.getElementById("myform3").style.visibility = "hidden";
            document.getElementById("eleventh").style.visibility = "hidden";
                
                if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#sixth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else {
                $('#eighth').html("$${{\\partial v} \\over {\\partial y}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }
        }

    });


    $('#sixth').on('click', function() {

        if($('#sixth').attr('data-click-state') == 1) {
            $('#sixth').attr('data-click-state', 0);
            $('#sixth').html("\\(\\require{cancel}\\cancelto{0} {{\\partial w} \\over {\\partial z}}\\)");
            $('#sixth').css('color', 'red');
            document.getElementById("myform4").style.visibility = "visible";

                if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial v} \\over {\\partial y}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else {
                $('#eighth').html("$$0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }
        }
        
        else  {
            $('#sixth').attr('data-click-state', 1);
            $('#sixth').html("\\({{\\partial w} \\over {\\partial z}}\\)");
            $('#sixth').css('color', 'black');
            document.getElementById("myform4").style.visibility = "hidden";
            document.getElementById("twelfth").style.visibility = "hidden";
                
                if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial w} \\over {\\partial z}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 1) ) {
                $('#eighth').html("$${{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#fourth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#fourth').attr('data-click-state') == 0) ) {
                $('#eighth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}} = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }

                else {
                $('#eighth').html("$${{\\partial w} \\over {\\partial z}}  = 0$$");
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                }
        }

    });
    
    $("#Assumptions1").select().on("change", function() {
  var answer = document.getElementById("Assumptions1");
  if (answer.value == "a1") {
    $('#ninth').html("Correct")
    $('#ninth').css('color', 'green');
} else {
    $('#ninth').html("Wrong")
    $('#ninth').css('color', 'red');
  }
  document.getElementById("ninth").style.visibility = "visible";
});

$("#Assumptions2").select().on("change", function() {
  var answer = document.getElementById("Assumptions2");
  if (answer.value == "b2") {
    $('#tenth').html("Correct")
    $('#tenth').css('color', 'green');
} else {
    $('#tenth').html("Wrong")
    $('#tenth').css('color', 'red');
  }
  document.getElementById("tenth").style.visibility = "visible";
});

$("#Assumptions3").select().on("change", function() {
  var answer = document.getElementById("Assumptions3");
  if (answer.value == "c2") {
    $('#eleventh').html("Correct")
    $('#eleventh').css('color', 'green');
} else {
    $('#eleventh').html("Wrong")
    $('#eleventh').css('color', 'red');
  }
  document.getElementById("eleventh").style.visibility = "visible";
});


$("#Assumptions4").select().on("change", function() {
  var answer = document.getElementById("Assumptions4");
  if (answer.value == "d2") {
    $('#twelfth').html("Correct")
    $('#twelfth').css('color', 'green');
} else {
    $('#twelfth').html("Wrong")
    $('#twelfth').css('color', 'red');
  }
  document.getElementById("twelfth").style.visibility = "visible";
});
    

    });
