if (annyang) {
    var commands = {
        'introduction': function() {
            console.log('introduction');
            $("#introduction").show();
            $("#histoire").hide();
            $("#assistant").hide();
            $("#references").hide();
        },
        'histoire': function() {
            console.log('histoire');
            $("#introduction").hide();
            $("#histoire").show();
            $("#assistant").hide();
            $("#references").hide();
        },
        'assistant': function() {
            console.log('assistant');
            $("#introduction").hide();
            $("#histoire").hide();
            $("#assistant").show();
            $("#references").hide();
        },
        'référence': function() {
            console.log('référence');
            $("#introduction").hide();
            $("#histoire").hide();
            $("#assistant").hide();
            $("#references").show();
        }
    };

    annyang.setLanguage('fr-FR');
    annyang.addCommands(commands);
    annyang.start();
}
