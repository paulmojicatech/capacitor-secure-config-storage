import Foundation

@objc public class SecureConfigStorage: NSObject {
    @objc public func echo(_ value: String) -> String {
        return value
    }
    
    @objc public func getValueFromConfig(_ value: String) -> String {
        let path = Bundle.main.path(forResource: "Info", ofType: "plist") as! String
        let infoContents = NSDictionary(contentsOfFile: path) as! [String:AnyObject]
        return infoContents["ClientSecret"] as! String
    }
}
