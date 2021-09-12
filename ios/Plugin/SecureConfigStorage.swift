import Foundation

@objc public class SecureConfigStorage: NSObject {
    @objc public func echo(_ value: String) -> String {
        return value
    }
    
    @objc public func getValueFromConfig(_ value: String) -> String? {
        guard let path = Bundle.main.path(forResource: "Info", ofType: "plist") else {
            return nil
        }
        guard let infoContents: [String : AnyObject] = NSDictionary(contentsOfFile: path) as? [String : AnyObject] else {
            return nil
        }
        return infoContents[value] as? String
    }
    
    @objc public func seedDatabase(_ value: [String]?) -> String {
        // if there are scripts use
        return ""
    }
}
