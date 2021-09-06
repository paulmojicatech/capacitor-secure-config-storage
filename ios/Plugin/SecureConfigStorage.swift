import Foundation

@objc public class SecureConfigStorage: NSObject {
    @objc public func echo(_ value: String) -> String {
        return value
    }
    
    @objc public func getValueFromConfig(_ value: String) -> String {
        return "Test"
    }
}
