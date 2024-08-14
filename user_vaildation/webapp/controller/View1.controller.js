sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  function (Controller) {
    "use strict";
    var that;
    return Controller.extend("uservaildation.controller.View1", {
      onInit: function () {
        that = this;
        that.arr = [];
      },
      onSubmit: function () {
        let username = that.byId("_IDGenInput1").getValue()
        let useremail = that.byId("_IDGenInput2").getValue()
        let usercont = that.byId("_IDGenInput3").getValue()
        let userpass = that.byId("_IDGenInput4").getValue()

        let obj = {
          USER_NAME: username,
          USER_EMAIL: useremail,
          USER_CONT: usercont,
          USER_PASS: userpass
        }
          
        if( that.byId("_IDGenButton2").getText()=="Create")
          {
            that.getOwnerComponent().getModel().create('/User_Data',obj,{
              success:function(response)
              {
                alert(response)
              },
              error:function(error)
              {
                alert("er:"+error)
              }
            })
          }
          if( that.byId("_IDGenButton2").getText()=="Update")
            {
              let get_selected = that.byId("_IDGenTable1").getSelectedItem().getCells()[0].getProperty("text")
                  that.getOwnerComponent().getModel().update('/User_Data('+get_selected +")",obj,{
                    success:function(response)
                    {
                      alert(response)
                      that.byId("_IDGenButton2").setText("Create")
                    },
                    error:function(error)
                    {
                      alert("er:"+error)
                    }
                  })

            }

      },
      onReset: function () {
        that.byId("_IDGenInput1").setValue("")
        that.byId("_IDGenInput2").setValue("")
        that.byId("_IDGenInput3").setValue("")
        that.byId("_IDGenInput4").setValue("")
      },
      setValues:function()
      {
        that.byId("_IDGenInput1").setValue(that.byId("_IDGenTable1").getSelectedItem().getCells()[1].getProperty("text"))
        that.byId("_IDGenInput2").setValue(that.byId("_IDGenTable1").getSelectedItem().getCells()[2].getProperty("text"))
        that.byId("_IDGenInput3").setValue(that.byId("_IDGenTable1").getSelectedItem().getCells()[3].getProperty("text"))
        that.byId("_IDGenButton2").setText("Update")
        
      },
      onDelete: function () {
        let get_selected = that.byId("_IDGenTable1").getSelectedItem().getCells()[0].getProperty("text")

        that.getOwnerComponent().getModel().remove('/User_Data('+get_selected+")",{
          success:function(response)
          {
            console.log(response)
          },
          error:function(error)
          {
            console.log(error)
          }
        })
      }
    });
  });
