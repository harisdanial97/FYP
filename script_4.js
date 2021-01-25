$(document).ready(function() {

    $('#first').on('click', function() {

            if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).html("\\(\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}\\)");
            $(this).css('color', 'red');
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            document.getElementById("myform1").style.visibility = "visible";
            document.getElementById("twelfth").style.visibility = "hidden";
        }
        else {
            $(this).attr('data-click-state', 1);
            $(this).html("\\({{\\partial \\rho} \\over {\\partial t}}\\)");
            $(this).css('color', 'black');
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            document.getElementById("myform1").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("twelfth").style.visibility = "hidden";
        }
    });

        $('#third').on('click', function() {

            if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).html("\\(\\require{cancel}\\cancelto{0} {{\\partial u} \\over {\\partial x}}\\)");
            $(this).css('color', 'red');
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            document.getElementById("twelfth").style.visibility = "hidden";
        }
        else {
            $(this).attr('data-click-state', 1);
            $(this).html("\\({{\\partial u} \\over {\\partial x}}\\)");
            $(this).css('color', 'black');
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            document.getElementById("twelfth").style.visibility = "hidden";
        }
    });

        $('#fifth').on('click', function() {

            if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).html("\\(\\require{cancel}\\cancelto{0} {{\\partial v} \\over {\\partial y}}\\)");
            $(this).css('color', 'red');
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            document.getElementById("twelfth").style.visibility = "hidden";
        }
        else {
            $(this).attr('data-click-state', 1);
            $(this).html("\\({{\\partial v} \\over {\\partial y}}\\)");
            $(this).css('color', 'black');
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            document.getElementById("twelfth").style.visibility = "hidden";
        }
    });


    $('#seventh').on('click', function() {

        if($(this).attr('data-click-state') == 1) {
        $(this).attr('data-click-state', 0);
        $(this).html("\\(\\require{cancel}\\cancelto{0} {{\\partial w} \\over {\\partial z}}\\)");
        $(this).css('color', 'red');
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        document.getElementById("myform2").style.visibility = "visible";
        document.getElementById("twelfth").style.visibility = "hidden";
        }
        else {
        $(this).attr('data-click-state', 1);
        $(this).html("\\({{\\partial w} \\over {\\partial z}}\\)");
        $(this).css('color', 'black');
        MathJax.Hub.Queue(["Typeset",MathJax.Hub])
        document.getElementById("myform2").style.visibility = "hidden";
        document.getElementById("tenth").style.visibility = "hidden";
        document.getElementById("twelfth").style.visibility = "hidden";
        }

    });

    $('#button1').on('click', function() {
        var answer = document.getElementById("Assumptions1");
        if (answer.value == "a1") {
        document.getElementById("ninth").style.visibility = "visible";
        $('#ninth').html("Correct")
        $('#ninth').css('color', 'green');
        }
        else {
        document.getElementById("ninth").style.visibility = "visible";
        $('#ninth').html("Wrong")
        $('#ninth').css('color', 'red');
        }

    });

    $('#button2').on('click', function() {
        var answer = document.getElementById("Assumptions2");
        if (answer.value == "d2") {
        document.getElementById("tenth").style.visibility = "visible";
        $('#tenth').html("Correct")
        $('#tenth').css('color', 'green');
        }
        else {
        document.getElementById("tenth").style.visibility = "visible";
        $('#tenth').html("Wrong")
        $('#tenth').css('color', 'red');
        }

    });

    $('#button3').on('click', function() {
    document.getElementById("twelfth").style.visibility = "visible";
    if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#fifth').attr('data-click-state') == 1) && ($('#seventh').attr('data-click-state') == 1) ) {
    $('#twelfth').html(" $${{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}} = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#fifth').attr('data-click-state') == 1) && ($('#seventh').attr('data-click-state') == 1) ) {
    $('#twelfth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#fifth').attr('data-click-state') == 0) && ($('#seventh').attr('data-click-state') == 1) ) {
    $('#twelfth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#fifth').attr('data-click-state') == 1) && ($('#seventh').attr('data-click-state') == 0) ) {
    $('#twelfth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}}  = 0$$");
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 0) && ($('#fifth').attr('data-click-state') == 1) && ($('#seventh').attr('data-click-state') == 1) ) {
    $('#twelfth').html("$${{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#fifth').attr('data-click-state') ==0) && ($('#seventh').attr('data-click-state') == 1) ) {
    $('#twelfth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#fifth').attr('data-click-state') ==1) && ($('#seventh').attr('data-click-state') == 0) ) {
    $('#twelfth').html("$${{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}}  = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#fifth').attr('data-click-state') ==0) && ($('#seventh').attr('data-click-state') == 1) ) {
    $('#twelfth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#fifth').attr('data-click-state') ==1) && ($('#seventh').attr('data-click-state') == 0) ) {
    $('#twelfth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}}  = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 1) && ($('#fifth').attr('data-click-state') ==0) && ($('#seventh').attr('data-click-state') == 0) ) {
    $('#twelfth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 0) && ($('#fifth').attr('data-click-state') ==0) && ($('#seventh').attr('data-click-state') == 1) ) {
    $('#twelfth').html("$${{\\partial w} \\over {\\partial z}}  = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 0) && ($('#fifth').attr('data-click-state') ==1) && ($('#seventh').attr('data-click-state') ==0 ) ) {
    $('#twelfth').html("$$ {{\\partial v} \\over {\\partial y}} = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 1) && ($('#fifth').attr('data-click-state') ==0) && ($('#seventh').attr('data-click-state') == 0) ) {
    $('#twelfth').html("$$ {{\\partial u} \\over {\\partial x}}= 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 1) && ($('#third').attr('data-click-state') == 0) && ($('#fifth').attr('data-click-state') ==0) && ($('#seventh').attr('data-click-state') == 0) ) {
    $('#twelfth').html("$${{\\partial \\rho} \\over {\\partial t}} = 0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else if(($('#first').attr('data-click-state') == 0) && ($('#third').attr('data-click-state') == 0) && ($('#fifth').attr('data-click-state') ==0) && ($('#seventh').attr('data-click-state') == 0) ) {
    $('#twelfth').html("$$0$$");
    $('#twelfth').css('color', 'green');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    else {
    $('#twelfth').html("$${{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0$$");
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    $('#twelfth').css('color', 'green');
    }
    });

    });

