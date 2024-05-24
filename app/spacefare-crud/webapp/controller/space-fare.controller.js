sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("spacefarecrud.controller.space-fare", {
            onInit: function () {
                // let oModel = this.getOwnerComponent().getModel();
                
                // this.getView().setModel(oModel)
                this.onReadAll()
            },
            onReadAll:async function () {
                var that = this;
                let oModel = this.getOwnerComponent().getModel();
                // oModel.setUseBatch(false);
                let oGalacticContext = await oModel.bindList("/Galactic_Spacefarer").requestContexts();
                let aGalactic_SpaceFarer = [];

                oGalacticContext.forEach(function (oContext) {
                    aGalactic_SpaceFarer.push(oContext.getObject());
                    });
                    var oGalacticModel = new JSONModel({
                        galactic_spacefarer: aGalactic_SpaceFarer
                    });

                    this.getView().setModel(oGalacticModel, "Galactic_Spacefarer");
                
            },
            onEdit: function(oEvent){
                var that = this;
                let oModel = this.getView().getModel("Galactic_Spacefarer");
                // oModel.setUseBatch(false);
                if(oEvent.getSource().getText()==="edit"){
                    oEvent.getSource().setText("save");
                    oEvent.getSource().getParent().getParent().getCells()[5].setEditable(true);
                    oEvent.getSource().getParent().getParent().getCells()[4].setEditable(true);
                    
                }else{
                    oEvent.getSource().setText("edit");
                    oEvent.getSource().getParent().getParent().getCells()[4].setEditable(false);
                    oEvent.getSource().getParent().getParent().getCells()[5].setEditable(false);
                    var oBindingContext = oEvent.getSource().oPropagatedProperties.oBindingContexts.Galactic_Spacefarer;

                    oModel.setProperty(oBindingContext.getPath() + "/stardust_collection", 31);
                    oModel.setProperty(oBindingContext.getPath() + "/wormhole_navigation_skill", 31);
                    oModel.refresh();
                    this.getOwnerComponent().getModel().bindList("/Galactic_Spacefarer").submitChanges();
                    // this.getOwnerComponent().getModel().update("/Galactic_Spacefarer(1)",oModel.getData().galactic_spacefarer[0],{
                    //     success: function () {
                    //       MessageToast.show("Data updated successfully!");
                    //     },
                    //     error: function () {
                    //       MessageToast.show("Error updating data.");
                    //     }
                    // })
                }                
            }

        });
    });
