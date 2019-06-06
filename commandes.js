if (annyang) {
    var commands = {
        'introduction': function() {
            console.log('introduction');
            $("#introduction").show();
            $("#histoire").hide();
            $("#assistant").hide();
            $("#exemples").hide();
            $("#sources").hide();

        },
        'histoire': function() {
            console.log('histoire');
            $("#introduction").hide();
            $("#histoire").show();
            $("#assistant").hide();
            $("#exemples").hide();
            $("#sources").hide();

        },
        'assistant': function() {
            console.log('assistant');
            $("#introduction").hide();
            $("#histoire").hide();
            $("#assistant").show();
            $("#exemples").hide();
            $("#sources").hide();

        },
        'exemples': function() {
            console.log('exemples');
            $("#introduction").hide();
            $("#histoire").hide();
            $("#assistant").hide();
            $("#exemples").show();
            $("#sources").hide();

        },
        'référence': function() {
            console.log('référence');
            $("#introduction").hide();
            $("#histoire").hide();
            $("#assistant").hide();
            $("#exemples").hide();
            $("#sources").show();

        }
    };

    annyang.setLanguage('fr-FR');
    annyang.addCommands(commands);
    annyang.start();
}
