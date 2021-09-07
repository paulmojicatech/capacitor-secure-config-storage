import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SecureConfigStoragePlugin)
public class SecureConfigStoragePlugin: CAPPlugin {
    private let implementation = SecureConfigStorage()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    
    @objc func getValueFromConfig(_ call: CAPPluginCall) {
        let value = call.getString("key") ?? ""
        call.resolve([
            "result": implementation.getValueFromConfig(value)
        ])
    }
}
