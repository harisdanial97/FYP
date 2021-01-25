$(document).ready(function() {

    $('#first').on('click', function() {

        if($('#first').attr('data-click-state') == 1) {
            $('#first').attr('data-click-state', 0);
            $('#first').html("\\(\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}\\)");
            $('#first').css('color', 'red');

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
    
    

    });

