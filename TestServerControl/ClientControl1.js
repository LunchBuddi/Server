/// <reference name="MicrosoftAjax.js"/>


Type.registerNamespace("TestServerControl");

TestServerControl.ClientControl1 = function(element) {
    TestServerControl.ClientControl1.initializeBase(this, [element]);
}

TestServerControl.ClientControl1.prototype = {
    initialize: function() {
        TestServerControl.ClientControl1.callBaseMethod(this, 'initialize');
        
        // Add custom initialization here
    },
    dispose: function() {        
        //Add custom dispose actions here
        TestServerControl.ClientControl1.callBaseMethod(this, 'dispose');
    }
}
TestServerControl.ClientControl1.registerClass('TestServerControl.ClientControl1', Sys.UI.Control);

if (typeof(Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();