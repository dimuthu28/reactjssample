/**
 * Created by UWEERD2 on 2/10/2016.
 */

var React = require("react");

var TestButton =  React.createClass({

    componentDidMount:function(){
        console.log("Component were mounted to Dom ");

        require("font-awesome-webpack");

        /*require("script!../bower_components/jquery/jquery.js");*/

        require("!style!css!../bower_components/kaltura/jquery.fileupload-ui.css");
        require("script!../bower_components/kaltura/jquery.ui.widget");
        require("script!../bower_components/kaltura/load-image.all.min");
      /*  require("!style!css!../bower_components/kaltura/jquery.fileupload-ui-noscript.css");
        require("!style!css!../bower_components/kaltura/jquery.fileupload-noscript.css");*/
       /* require("!style!css!../bower_components/kaltura/jquery.fileupload.css");*/
        require("!style!css!sass!../bower_components/ux-boilerplate/css/main.scss");

        require("script!../bower_components/kaltura/canvas-to-blob.min");
        require("script!../bower_components/kaltura/jquery.blueimp-gallery.min");
        require("script!../bower_components/kaltura/jquery.iframe-transport");
        require("script!../bower_components/kaltura/jquery.fileupload");
        require("script!../bower_components/kaltura/jquery.fileupload-process");
        require("script!../bower_components/kaltura/jquery.fileupload-image");
        require("script!../bower_components/kaltura/jquery.fileupload-audio");
        require("script!../bower_components/kaltura/jquery.fileupload-video");
        require("script!../bower_components/kaltura/jquery.fileupload-validate");
        require("script!../bower_components/kaltura/jquery.fileupload-ui");
        require("script!../bower_components/kaltura/webtoolkit.md5");
        require("script!../bower_components/kaltura/jquery.fileupload-kaltura");
    },
    uploadOperation:function(rootElement){
        //this.refs.ttttt
        $('#fileupload').fileupload({
            apiURL: this.props.baseapiurl,
            url: this.props.baseapiurl+'?service=uploadToken&action=upload&format=1',
            ks:this.props.kalurasession ,
            acceptFileTypes: /(\.|\/)(mov|mpeg|mp4|avi|wmv|flv|3gp|asf|qt|f4v|mxf|rm)$/i,//new RegExp('(\\.|\/)' + validfiletpes, 'i'), //file type validation
            maxFileSize: 500000000, // 500 MB validation
            ignoreChunkHeader: true,
            singleFileUploads: true,
            dataType: 'json',
            autoUpload: false,
            disableImageResize: false,
            previewMaxWidth: 50,
            previewMaxHeight: 50,
            previewCrop: true
        }).on('fileuploadprocessalways', function(e, data) {
            console.log('Upload initiated');
            var currentFile = data.files[data.index];
            if (data.files.error && currentFile.error) {
                console.log('test test ');
                console.log(currentFile.error);
            }
        }).on('fileuploadstart', function(e, data) {
            console.log('File upload Started');

        }).on('fileuploaddone', function(e, data) {
            console.log('File upload Ended');
            console.log(data);
        }).on('fileuploadprogress', function(e, data) {
            window.document.getElementById("progressid").innerHTML = '' + ((data.loaded / data.total) * 100).toFixed(2) + '%';
        }).on('fileuploadchunksend', function(e, data) {
            console.log('data');
            console.log(data);
        }).on('fileuploadsend', function(e, data) {
            console.log('fileuploadsend');
            console.log(data);
        }).on('fileuploadchunkalways', function(e, data) {
            console.log('fileuploadalways');
        }).on('fileuploadfail', function(e, data) {
            console.log('fileuploadfail');
        }).on('fileuploadaddfail', function(e, data) {
            window.document.getElementById("progressid").innerHTML = data.message;
        });
    },
    sampleevent:function(){
        console.log(this.props.user);
        alert("Hello" + "test");
    },

    render:function(){
        return(

            <div id="btnInstPnl" ref="ttttt">
                <div id="fileupload" >
                          <span className="fileinput-button btn btn-default btn-lg btn-fileupload" onClick={this.uploadOperation}>
                              <span><i className="fa fa-upload"></i>Test</span>
                              <input type="file" name="fileData" />
                          </span>

                    <span className="fileupload-process"></span>

                    <div id="displaydata" role="presentation">
                        <div className="files"></div>
                    </div>
                </div>
            </div>
        )
    }
});


module.exports = TestButton;