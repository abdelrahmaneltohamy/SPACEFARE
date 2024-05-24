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
                this.getView().setModel(oGalacticContext, "Galactic_Spacefarer_Context");
                oGalacticContext.forEach(function (oContext) {
                    aGalactic_SpaceFarer.push(oContext.getObject());
                    });
                    var oGalacticModel = new JSONModel({
                        galactic_spacefarer: aGalactic_SpaceFarer
                    });

                    this.getView().setModel(oGalacticModel, "Galactic_Spacefarer");
                
            },
            onDuplicate: function(oEvent){
                // var oBindingContext = oEvent.getSource().oPropagatedProperties.oBindingContexts.Galactic_Spacefarer;
                let id=parseInt(oEvent.getSource().getParent().getParent().getCells()[0].getText());
                let oModel = this.getView().getModel("Galactic_Spacefarer");
                let newId=id+100;
                let oldSpacefarer = oModel.getData().galactic_spacefarer.filter(farer=>farer.id==id)[0];
                let newSpacefarer = {
                    ...oldSpacefarer,
                    id:newId
                }
                this.getOwnerComponent().getModel().bindList("/Galactic_Spacefarer").create(newSpacefarer);
                oModel.refresh();
                this.onReadAll();
            },
            onDelete: function(oEvent){
                // var oBindingContext = oEvent.getSource().oPropagatedProperties.oBindingContexts.Galactic_Spacefarer;
                let id=parseInt(oEvent.getSource().getParent().getParent().getCells()[0].getText());
                this.getView().getModel("Galactic_Spacefarer_Context").forEach(context => {
                    context.refresh();
                    if(context.getObject().id == id)
                        context.delete()
                });
                this.onReadAll();
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

                    oModel.setProperty(oBindingContext.getPath() + "/stardust_collection", parseInt(oEvent.getSource().getParent().getParent().getCells()[4].getValue()));
                    oModel.setProperty(oBindingContext.getPath() + "/wormhole_navigation_skill", parseInt(oEvent.getSource().getParent().getParent().getCells()[5].getValue()));
                    oModel.refresh();
                    let id=parseInt(oEvent.getSource().getParent().getParent().getCells()[0].getText());
                    let updatedSpacefarer = oModel.getData().galactic_spacefarer.filter(farer=>farer.id==id)[0];
                
                this.getOwnerComponent().getModel().bindList("/Galactic_Spacefarer").create(updatedSpacefarer);
                oModel.refresh();
                this.onReadAll();
                    // let id=parseInt(oEvent.getSource().getParent().getParent().getCells()[0].getText());
                    // this.getView().getModel("Galactic_Spacefarer_Context").forEach(context => {
                    //     let value = context.getValue();
                    //     if(value.id == id){
                    //         value = oModel.getData().galactic_spacefarer.filter(spacefarer=> spacefarer.id==id)[0];
                    //         context.refresh();
                    //     }
                            
                    // });
                    // this.onReadAll();
                    // this.getOwnerComponent().getModel().bindList("/Galactic_Spacefarer").submitChanges();
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
