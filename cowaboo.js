$(document).ready(() => {
    const url = "http://groups.cowaboo.net/2019/group01%20-%20Vox%20machines/public/api/";

    getEntries = (observatoryId, func) => {
        console.log("Getting entries");
        $.get({
            url: url + 'observatory?observatoryId=' + observatoryId,
            success: (data) => {
                func(Object.values(data['dictionary']['entries']))
            },
            error: (error) => {
                console.log(error);
            }
        })
    };

    updateAssistants = (data) => {
        console.log(data);
        data.forEach(item => {
            const assistant = item.value;
            const entreprise = item.tags.split("||").join("");
            $("#table-assistants").append('<tr><td>' + assistant + ' de ' + entreprise + '</td></tr>')
        });
    };

    getEntries('assistant', updateAssistants);
    getEntries('cowaboo');
});
