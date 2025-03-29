function StartLLoading(duration)
    SendNUIMessage({
        action = "startLoading",
        duration = duration 
    })
end
exports("StartLLoading", StartLLoading)

function StopLLoading()
    SendNUIMessage({
        action = "stopLoading" 
    })
end
exports("StopLLoading", StopLLoading)
