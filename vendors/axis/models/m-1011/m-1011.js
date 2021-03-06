{
  models: [
    {
      id: "m1011",
      name: "M1011",
      vendor_id: "axis",
      username: "root",
      password: "pass",
      jpg_url: "axis-cgi/jpg/image.cgi",
      h264_url: "axis-media/media.amp",
      mjpg_url: "axis-cgi/mjpg/video.cgi",
      shape: "Box",
      resolution: "640x480",
      official_url: "http://www.axis.com/products/cam_m1011/",
      more_info: "",
      audio_url: "",
      poe: false,
      wifi: false,
      upnp: true,
      ptz: false,
      infrared: false,
      varifocal: false,
      sd_card: false,
      audio_io: false,
      discontinued: true,
      onvif: true,
      psia: false,
      defaults: {
        auth: {
          basic: {
            username: "root",
            password: "pass"
          }
        }
      },
      snapshots: {
        h264: "axis-media/media.amp",
        lowres: "axis-cgi/jpg/image.cgi?resolution=cif",
        jpg: "axis-cgi/jpg/image.cgi",
        mpeg4: "",
        mobile: "axis-media/media.amp?resolution=QCIF",
        mjpg: "axis-cgi/mjpg/video.cgi"
      },
      images: {
        icon: "https://evercam-public-assets.s3.amazonaws.com/axis/m1011/icon.jpg",
        thumbnail: "https://evercam-public-assets.s3.amazonaws.com/axis/m1011/thumbnail.jpg",
        original: "https://evercam-public-assets.s3.amazonaws.com/axis/m1011/original.jpg"
      }
    }
  ]
}
