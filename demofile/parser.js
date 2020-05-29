const fs = require("fs");
const demofile = require("demofile");

const args = process.argv;

var currentTick = -1

function output(record) {
    console.log(JSON.stringify(record))
}


fs.readFile(args[2], (err, buffer) => {
    const demoFile = new demofile.DemoFile()

    demoFile.on("tickend", tick => {
        currentTick = tick
    })


    demoFile.on("svc_VoiceInit", e => {
        console.error(e)
    })

    demoFile.on("svc_VoiceData", e => {
        // console.error(e)
        // console.error()

        // let client = demoFile.entities.getByUserId(e.client)
        // console.error(client)
        // let client = demoFile.entities.getByUserId(e.client)

        e.tick = currentTick
        let record = JSON.stringify(e)
        console.log(record)
        console.log("\n--------------\n")
        // console.log(e)
        


        // let record = {
        //     name: client.name,
        //     xuid: e.xuid,
        //     audibleMask: e.audibleMask,

        // }
    })

    demoFile.parse(buffer)
})
