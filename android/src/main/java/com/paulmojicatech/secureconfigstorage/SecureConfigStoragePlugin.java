package com.paulmojicatech.secureconfigstorage;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SecureConfigStorage")
public class SecureConfigStoragePlugin extends Plugin {

    private SecureConfigStorage implementation = new SecureConfigStorage();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void getValueFromConfig(PluginCall call) {
        String key = call.getString("key");

        // Get key value from configuration
        JSObject ret = new JSObject();
        ret.put("result", implementation.getValueFromConfig("Test Conn String"));
    }
}
