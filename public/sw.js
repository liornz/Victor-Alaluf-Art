if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts("worker-BgAhuc_0p8Fs03K2uZ7Xr.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/logo.2e01117f.png",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/server/middleware-manifest.json",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/BgAhuc_0p8Fs03K2uZ7Xr/_buildManifest.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/BgAhuc_0p8Fs03K2uZ7Xr/_middlewareManifest.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/BgAhuc_0p8Fs03K2uZ7Xr/_ssgManifest.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/555-c0e3e6f2bcd6ba68.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/d7eeaac4-587d002979848227.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/framework-0f8b31729833af61.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/main-e53a70ff9769529b.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/pages/_app-36cd3dd38a07aaad.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/pages/contact-413a3d2ef1030970.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/pages/index-739dae2efd53e00d.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/pages/press-e87cf6bb76731112.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/pages/press/%5Barticle%5D-d9910c3b53686082.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/pages/works-98167a0f7aef1bd9.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/pages/works/%5B...slug%5D-0be78fa34f608a04.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/pages/works/%5Bcategory%5D-8ce4671b8b6523c9.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/chunks/webpack-514908bffb652963.js",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/css/1e48aeb15e7eddb4.css",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/css/20a81894fda1db3f.css",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/css/2c37726025f21ac2.css",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/css/492f9bcbc2f6736a.css",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/css/4cb01bd7a206dfb1.css",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/css/7934022d7abb6c06.css",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/css/df23b3ef815d45e0.css",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/_next/static/css/e1834fe20ed27025.css",revision:"BgAhuc_0p8Fs03K2uZ7Xr"},{url:"/articles/ArtInvestor_12_14.pdf",revision:"8f73a63c103eb5499201010f8019952e"},{url:"/favicon.ico",revision:"ac7d9aaea04e5d4d3afaec801633def6"},{url:"/images/Vic-logo.png",revision:"20d4625f90ed93d7cebd04105d905b36"},{url:"/images/av big1.png",revision:"6e7b55c91c39bd3d650d25b187454a2b"},{url:"/images/categories/drawings/background.jpg",revision:"158a02d38c56477da93e8b889f4a1692"},{url:"/images/categories/drawings/drawings-top.jpg",revision:"d56a23d470ee298c574697ae10e11724"},{url:"/images/categories/drawings/works-drawings.jpg",revision:"581697deae31229071340a5505c22784"},{url:"/images/categories/fabric-and-paper/background.jpg",revision:"e243133979d8bc89eeca2694675f584a"},{url:"/images/categories/fabric-and-paper/fabric-and-paper-top.jpg",revision:"e243133979d8bc89eeca2694675f584a"},{url:"/images/categories/fabric-and-paper/works-fabric-and-paper.jpg",revision:"e243133979d8bc89eeca2694675f584a"},{url:"/images/categories/installations/background.jpg",revision:"5e29d18d62568eaab1caff4898028993"},{url:"/images/categories/installations/installations-top.jpg",revision:"85a89b60d056bdd7ad20fd1ba0dec649"},{url:"/images/categories/installations/works-installations.jpg",revision:"b83ea2f397c2648d4eec55ab9ac00928"},{url:"/images/categories/photography/background.jpg",revision:"653776a1818a9f2d471d583a40e51a20"},{url:"/images/categories/photography/photography-top.jpg",revision:"653776a1818a9f2d471d583a40e51a20"},{url:"/images/categories/photography/works-photography.jpg",revision:"653776a1818a9f2d471d583a40e51a20"},{url:"/images/categories/sculptures/background.jpg",revision:"4d73e71443d762d6297c3f2fc565afd7"},{url:"/images/categories/sculptures/sculptures-top.jpg",revision:"5b85ded085bd4edf1ffa8208336a6508"},{url:"/images/categories/sculptures/works-sculptures.jpg",revision:"3e28cd00c391f7dd2be5f0073736abae"},{url:"/images/categories/video-art/background.jpg",revision:"f124608945496bef1f69e55f6d3d416d"},{url:"/images/categories/video-art/video-art-top.jpg",revision:"f124608945496bef1f69e55f6d3d416d"},{url:"/images/categories/video-art/works-video-art.jpg",revision:"f124608945496bef1f69e55f6d3d416d"},{url:"/images/favicon.ico",revision:"ac7d9aaea04e5d4d3afaec801633def6"},{url:"/images/icons/android-chrome-192x192.png",revision:"50de619f69cb9e639e515f11de7e4636"},{url:"/images/icons/apple-touch-icon.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/icons/favicon-16x16.png",revision:"a6d6390796d0429a1746f2c47207d54e"},{url:"/images/icons/favicon-32x32.png",revision:"76b53168e68079cd94e04b5167ebd737"},{url:"/images/icons/logo-black.jpg",revision:"9ace1bae3ba2554179222c8e432c9c5b"},{url:"/images/icons/logo-black.png",revision:"0a98c52d8830391f18e8869cd57d6380"},{url:"/images/icons/logo-light.png",revision:"20d4625f90ed93d7cebd04105d905b36"},{url:"/images/icons/maskable_icon.png",revision:"41075b59ae9f3e09e628c9b954b0c83c"},{url:"/images/icons/maskable_icon_x128.png",revision:"736eafac60a40143b66aa5d6f57552f1"},{url:"/images/icons/maskable_icon_x192.png",revision:"cd37e1f0be4f9fab370809baca9caee5"},{url:"/images/icons/maskable_icon_x48.png",revision:"3bf04a14a8757b1ea1287a0a3961b033"},{url:"/images/icons/maskable_icon_x72.png",revision:"cb11958acb46789b97a2c3d4428951d8"},{url:"/images/icons/maskable_icon_x96.png",revision:"fa41885841f672d2a7e08c5a72bb1a88"},{url:"/images/icons/sinfronteras-128x128.png",revision:"8b63ff89d29e1fc7e6ea2d4142e39d3d"},{url:"/images/icons/sinfronteras-144x144.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/icons/sinfronteras-152x152.png",revision:"312b1a4021c9623bdddae0749f4249f0"},{url:"/images/icons/sinfronteras-16x16.png",revision:"a6d6390796d0429a1746f2c47207d54e"},{url:"/images/icons/sinfronteras-192x192.png",revision:"50de619f69cb9e639e515f11de7e4636"},{url:"/images/icons/sinfronteras-32x32.png",revision:"76b53168e68079cd94e04b5167ebd737"},{url:"/images/icons/sinfronteras-384x384.png",revision:"b5cf3101d27dea7e5813e8dce8915da7"},{url:"/images/icons/sinfronteras-512x512.png",revision:"2e8c22603466135978b18b57ff5068dd"},{url:"/images/icons/sinfronteras-72x72.png",revision:"993f1b34fcceb292a8e64bc88eebf4ae"},{url:"/images/icons/sinfronteras-96x96.png",revision:"d09304ea3b2708b577e79d1b79cd9ae1"},{url:"/images/icons/touch-icon-ipad-retina.png",revision:"39967303da25f7ef6ab808f4f2e6bc60"},{url:"/images/icons/touch-icon-ipad.png",revision:"312b1a4021c9623bdddae0749f4249f0"},{url:"/images/icons/touch-icon-iphone-retina.png",revision:"cfe764982aedbc880bd26a67d50d9b04"},{url:"/images/icons/touch-icon-iphone.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/image-bgd-home.JPG",revision:"da45dcc188dbf804de43704403949b4c"},{url:"/images/image1.jpeg",revision:"63820e547fb2389a67f895a69b28906a"},{url:"/images/image2.jpg",revision:"3beb657441ce4b8a7918e636fdcb5623"},{url:"/images/image3.JPG",revision:"435e4c60c6ae6d14ab60f5e28909282d"},{url:"/images/logo/logo.png",revision:"8e9d5e6d171ec7a61b608692333a01be"},{url:"/images/logo/logo_sinfronteras-417x150.png",revision:"a94f7fa2b9a430dee51145830dc4815a"},{url:"/images/logo/logo_sinfronteras-600x216.png",revision:"60ca0ceb1999fd645fb802d259c2c0e7"},{url:"/images/press/ARTNEWS-article.jpg",revision:"9870a46b5d14b86119b046e53af093e5"},{url:"/images/press/Neustart-mit-Tradition_Abendzeitung_12.09.2014.jpg",revision:"b5201d658a2a58fba2e75b20958ac43d"},{url:"/images/va logo -1.png",revision:"8e9d5e6d171ec7a61b608692333a01be"},{url:"/images/vic-about.jpg",revision:"9fa309f2d48142c7ea7f4073a91cbf5a"},{url:"/images/victor alaluf logo Untitled-1.jpg",revision:"94f8666a469a9dae0478fc379119aca3"},{url:"/images/victor-alaluf-logo.png",revision:"ac7d9aaea04e5d4d3afaec801633def6"},{url:"/images/works/drawings/book-paper/book-1.jpg",revision:"feb9eae3e17ca45b9b690fb38635c8b3"},{url:"/images/works/drawings/book-paper/book-2.jpg",revision:"24cd29ff3b99d0564d0d8185a3a94439"},{url:"/images/works/drawings/book-paper/book-3.jpg",revision:"8b5e2a1a35dba97ff3eec8b647f23745"},{url:"/images/works/drawings/book-paper/book-4.jpg",revision:"f2d484b68d23b81224ead1ec61e8bf1f"},{url:"/images/works/drawings/book-paper/book-5.jpg",revision:"bb21e43e71b01e3e74286bac47d8c495"},{url:"/images/works/drawings/book-paper/book-6.jpg",revision:"d4768630e3ee3c673bdbfa251cd70939"},{url:"/images/works/drawings/book-paper/book-7.jpg",revision:"b4101b9e78667693a6558d30739ace54"},{url:"/images/works/drawings/book-paper/book-8.jpg",revision:"f7c42d1c2db0e5d95055c814e77e3817"},{url:"/images/works/drawings/book-paper/book-tn.png",revision:"a503a6f682563502a2d648d5059e3170"},{url:"/images/works/drawings/drawings-top.jpg",revision:"d56a23d470ee298c574697ae10e11724"},{url:"/images/works/drawings/image-bgd-drawings.jpg",revision:"158a02d38c56477da93e8b889f4a1692"},{url:"/images/works/drawings/ink-drawings-big/ink-big-1.jpg",revision:"6ec0c38741becd938b074c4ad6b0404a"},{url:"/images/works/drawings/ink-drawings-big/ink-big-2.jpg",revision:"4cbfa90c9a2a4ffca41ae4d3c45e5eaf"},{url:"/images/works/drawings/ink-drawings-big/ink-big-3.jpg",revision:"a086e6316c42184e057d5d7e65bfa42f"},{url:"/images/works/drawings/ink-drawings-big/ink-big-4.jpg",revision:"e8402df954dd4fc44de1a847855c2a4a"},{url:"/images/works/drawings/ink-drawings-big/ink-big-5.jpg",revision:"f4ca8dbf5cdbe216e425c019fa72732f"},{url:"/images/works/drawings/ink-drawings-big/ink-big-tn.jpg",revision:"0a03cf808ac84ca48b091f538af6b19b"},{url:"/images/works/drawings/ink-drawings-small/ink-small-1.jpg",revision:"90fd243a4bc38aaf3a038d516a597d1c"},{url:"/images/works/drawings/ink-drawings-small/ink-small-2.jpg",revision:"84b096fe4439e79bdccbe545e2d5db54"},{url:"/images/works/drawings/ink-drawings-small/ink-small-3.jpg",revision:"c3fb78c4e568e055032c8316ee132dbb"},{url:"/images/works/drawings/ink-drawings-small/ink-small-4.jpg",revision:"67c9f34aa6a18e9a46b2082effc351cc"},{url:"/images/works/drawings/ink-drawings-small/ink-small-5.jpg",revision:"016bedbf4eb8a083bb118fce809def6b"},{url:"/images/works/drawings/ink-drawings-small/ink-small-6.jpg",revision:"a518795a702e94bb7942d606772ccd9d"},{url:"/images/works/drawings/ink-drawings-small/ink-small-7.jpg",revision:"986d442dda4c7728da5673603e09df49"},{url:"/images/works/drawings/ink-drawings-small/ink-small-tn.jpg",revision:"c05259f99c7b9a716b8804a7db0346c8"},{url:"/images/works/drawings/jewish-museum/jewish museum work 2 .jpg",revision:"a8b304064de725ba1d54cabc1e60278b"},{url:"/images/works/drawings/jewish-museum/jmb-1.jpg",revision:"f0fc7798ec4bb064b95a89b78ad5608a"},{url:"/images/works/drawings/jewish-museum/jmb-2.jpg",revision:"425dd109c3218053e15913c1487f61cd"},{url:"/images/works/drawings/jewish-museum/jmb-3.jpg",revision:"c59cbc1679fedabee73efa36d2fd0109"},{url:"/images/works/drawings/jewish-museum/jmb-4.jpg",revision:"a972332122a022115d86b85d7fa31183"},{url:"/images/works/drawings/lid-drawings/lid-tn.jpg",revision:"66414ebd6dca020dc4f2eedd879cfa21"},{url:"/images/works/drawings/lid-drawings/tapas-1.jpg",revision:"9263f7184048a9e29c3db79ddc0caae9"},{url:"/images/works/drawings/lid-drawings/tapas-2.jpg",revision:"5358624c532d7f6aa82797c6c5f0615a"},{url:"/images/works/drawings/lid-drawings/tapas-3.jpg",revision:"c8f44efd807b92e8861f8d19b2c2bc4c"},{url:"/images/works/drawings/lid-drawings/tapas-4.jpg",revision:"aa5e7d0be6fe0ae8b813eaf079813a6e"},{url:"/images/works/drawings/lid-drawings/tapas-5.jpg",revision:"2080c0e7e4e70853e44a8513efe6ddd1"},{url:"/images/works/drawings/lid-drawings/tapas-6.jpg",revision:"d2b83ff732d6a872e1b5226d2a61790a"},{url:"/images/works/drawings/lid-drawings/tapas-7.jpg",revision:"a3365961447c54849e0f928e5718eb75"},{url:"/images/works/drawings/plaster-drawings/plaster-1.jpg",revision:"30994a9114d2adca4f673923ce99b51c"},{url:"/images/works/drawings/plaster-drawings/plaster-10.jpg",revision:"9eb201b4e4fdb8299bb09ec0e62ae95f"},{url:"/images/works/drawings/plaster-drawings/plaster-11.jpg",revision:"f843c877ec20ee38f8f2a4549d4a47bb"},{url:"/images/works/drawings/plaster-drawings/plaster-12.jpg",revision:"d8fb0a28295832365e51b6b378d49f63"},{url:"/images/works/drawings/plaster-drawings/plaster-13.jpg",revision:"427762259746a9cfc56e7cb25309e4c9"},{url:"/images/works/drawings/plaster-drawings/plaster-14.jpg",revision:"3eaa6239fde4fa1623a8a4de9f152130"},{url:"/images/works/drawings/plaster-drawings/plaster-2.jpg",revision:"d7db5b458a6fd28bc1a845e91f1a08b3"},{url:"/images/works/drawings/plaster-drawings/plaster-3.jpg",revision:"64669c42e19b667a1f37af71d6eab6cc"},{url:"/images/works/drawings/plaster-drawings/plaster-4.jpg",revision:"596f0bc12dba5ba5be466f544e83c21b"},{url:"/images/works/drawings/plaster-drawings/plaster-5.jpg",revision:"2de931c943bd4b1dc422c4c095e4044b"},{url:"/images/works/drawings/plaster-drawings/plaster-6.jpg",revision:"d30faa74436e67e0df455feec41c95ad"},{url:"/images/works/drawings/plaster-drawings/plaster-7.jpg",revision:"58b3279e69780702396443882c040368"},{url:"/images/works/drawings/plaster-drawings/plaster-8.jpg",revision:"45ff6c3aacf30c559b7adda32073ca65"},{url:"/images/works/drawings/plaster-drawings/plaster-9.jpg",revision:"5ce72f6ea73a94d30df7d1e96f927626"},{url:"/images/works/drawings/plaster-drawings/plaster-tn.jpg",revision:"ce905647af661ba90dc1327c29d85654"},{url:"/images/works/drawings/shadow/shadow-1.jpg",revision:"581697deae31229071340a5505c22784"},{url:"/images/works/drawings/shadow/shadow-10.jpg",revision:"d400258249bd903c6cc7f64ddd1a5184"},{url:"/images/works/drawings/shadow/shadow-11.jpg",revision:"8712be856241ee5fca6f0b30aa0eaf2f"},{url:"/images/works/drawings/shadow/shadow-12.jpg",revision:"fda729e5d8a445f783dafb1934854f63"},{url:"/images/works/drawings/shadow/shadow-13.jpg",revision:"1a80ff16f3e6ff5e279f960c700cb246"},{url:"/images/works/drawings/shadow/shadow-2.jpg",revision:"68eff9f4183d0564a6daf795df8c10a4"},{url:"/images/works/drawings/shadow/shadow-3.jpg",revision:"cdbd8792415b29147c27339288876a5e"},{url:"/images/works/drawings/shadow/shadow-4.jpg",revision:"ed501ed9d97b280130f9d22143a80028"},{url:"/images/works/drawings/shadow/shadow-5.jpg",revision:"968fd5b204d19e1c4be16b04614f3875"},{url:"/images/works/drawings/shadow/shadow-6.jpg",revision:"f33a9833876245c50748c02fa48f639f"},{url:"/images/works/drawings/shadow/shadow-7.jpg",revision:"301980ebbc83950994dcd42df4b30432"},{url:"/images/works/drawings/shadow/shadow-8.jpg",revision:"ecc647bee0cf6320115fd659094d537f"},{url:"/images/works/drawings/shadow/shadow-9.jpg",revision:"2819fd199f7e69f1e7efd6401aa8d911"},{url:"/images/works/drawings/untouched-memories/untouched-memories-1.jpg",revision:"967fa8dcec7deb2e45263be069d2fa61"},{url:"/images/works/drawings/untouched-memories/untouched-memories-2.JPG",revision:"d0bc2ffc93245d522963f2e277106c34"},{url:"/images/works/drawings/untouched-memories/untouched-memories-3.jpg",revision:"db728120d7d82db9c1f211ea92a3b548"},{url:"/images/works/drawings/untouched-memories/untouched-memories-4.jpg",revision:"3fdd967d09d841973c3809af67468703"},{url:"/images/works/drawings/wood-drawings/wood-1.jpg",revision:"a28b7bcfde5d5aac4e1c5db88dc38a04"},{url:"/images/works/drawings/wood-drawings/wood-2.jpg",revision:"01ad44580a5235675023e9f9c745bd67"},{url:"/images/works/drawings/wood-drawings/wood-3.jpg",revision:"27c5785371ecadc05b8270860d339996"},{url:"/images/works/drawings/wood-drawings/wood-4.jpg",revision:"d7ab1d8d789c51e80902e10a5076434e"},{url:"/images/works/drawings/wood-drawings/wood-5.jpg",revision:"ac0de4cac1ec1f283c99e582352049a5"},{url:"/images/works/drawings/wood-drawings/wood-6.jpg",revision:"b2976ba8d84c9afb7849e3692de69b95"},{url:"/images/works/drawings/wood-drawings/wood-tn.jpg",revision:"63ec997a20da5d5b7279e4ef8bee8b63"},{url:"/images/works/installations/185/185-1.jpg",revision:"1257803e712d975eda36acea21dbbffe"},{url:"/images/works/installations/185/185-2.jpg",revision:"7598db65c9f8d9257eff2863f414f31a"},{url:"/images/works/installations/185/185-3.jpg",revision:"061dd263baa6f3b43864f37b6d1b697c"},{url:"/images/works/installations/ab-minus/ab-minus-1.jpg",revision:"6a89af8ad58c4904a4c343fcfbbee800"},{url:"/images/works/installations/ab-minus/ab-minus-2.jpg",revision:"1618c2e76abebdeec1233b7b639455a0"},{url:"/images/works/installations/ab-minus/ab-minus-3.jpg",revision:"b2e4d507c8857e7e567b8a8160bd5d72"},{url:"/images/works/installations/ab-minus/ab-minus-4.jpg",revision:"380938bc5ba6f1a7ff688786f458eb1d"},{url:"/images/works/installations/descalso/descalso-1.jpg",revision:"cffd3a302d3872ea217cc53170c20f59"},{url:"/images/works/installations/descalso/descalso-2.jpg",revision:"58c72d978650c65f6dbc0ecaf97c1a09"},{url:"/images/works/installations/dust-2/dust2-1.jpg",revision:"ba56a65cf3fe035979f186a0a9b2e792"},{url:"/images/works/installations/dust-2/dust2-2.jpg",revision:"b0899ef0124c9773e477e1ff040afe1c"},{url:"/images/works/installations/dust-2/dust2-3.jpg",revision:"996e8525b9ee28198d90037b270be12d"},{url:"/images/works/installations/dust/dust-1.jpg",revision:"e0f71e5a4f8426a114c8016894a3630c"},{url:"/images/works/installations/dust/dust-2.jpg",revision:"8746ae31cc0268275af7f58bfbb1daef"},{url:"/images/works/installations/dust/dust-3.jpg",revision:"c2c81739b29f6e449382deb531309976"},{url:"/images/works/installations/essence/essence-1.jpg",revision:"364127f29ca5f062a37596064e3f5105"},{url:"/images/works/installations/essence/essence-2.jpg",revision:"c1743ff99cf40653a87e677b1a9439cf"},{url:"/images/works/installations/essence/essence-3.jpg",revision:"d2a0bb84643be128e70921ad2850c305"},{url:"/images/works/installations/essence/essence-4.jpg",revision:"9805b804b4b07320a76e72d032b7729b"},{url:"/images/works/installations/fallen-leaves/fallen-1.jpg",revision:"52386b079d1cb0181d44d55a0f8019a6"},{url:"/images/works/installations/fallen-leaves/fallen-2.jpg",revision:"969e2dff4c3b6ae71f080db81bc27037"},{url:"/images/works/installations/fallen-leaves/fallen-3.jpg",revision:"49d785a7c5715190bd138b602652da91"},{url:"/images/works/installations/identity/identity-1.jpg",revision:"9c491c119b9f134f29c9d9b357e69853"},{url:"/images/works/installations/identity/identity-2.jpg",revision:"e554f27d13b78a7c51f0a84c13513442"},{url:"/images/works/installations/identity/identity-3.jpg",revision:"56a5bd6e27170656c730833633ba4f2b"},{url:"/images/works/installations/inner-compass/inner-1.jpg",revision:"a2b591332a592dacabc402d896c2d85b"},{url:"/images/works/installations/inner-compass/inner-2.jpg",revision:"8e5da7ccfeefa6c6e9577fe73461ce87"},{url:"/images/works/installations/inner-compass/inner-3.jpg",revision:"4ad0e0429c5f5cd36dec828a75efe483"},{url:"/images/works/installations/inner-compass/inner-4.jpg",revision:"a31e9304835a5df8b9181644a1dde811"},{url:"/images/works/installations/inner-compass/inner-5.jpg",revision:"346a346e1af612ffffc9db09d21b5930"},{url:"/images/works/installations/light/light-1.jpg",revision:"773bfdb04cbad5c442ec7dc93c66269e"},{url:"/images/works/installations/light/light-2.jpg",revision:"c8f62baf4ab7b33662ef8718ff9d2a0a"},{url:"/images/works/installations/light/light-3.jpg",revision:"e3c917b6946020bfecd7fdae443fe340"},{url:"/images/works/installations/light/light-4.jpg",revision:"03ebc8bd8e9c572176fde5d82f618ad0"},{url:"/images/works/installations/memories/memories-1.jpg",revision:"ce9e432329e59275da5eb215b2533577"},{url:"/images/works/installations/memories/memories-2.jpg",revision:"eece1cc115e663f4e64ee2d7202e8793"},{url:"/images/works/installations/memories/memories-3.jpg",revision:"3fa30cd98f2db114f7a0a7c5eae0483a"},{url:"/images/works/installations/memories/memories-4.jpg",revision:"6062579edc7ed9969c64cecf7c982e02"},{url:"/images/works/installations/memories/memories-5.jpg",revision:"ffc39ab86adda03ccddacebfa94a1ea9"},{url:"/images/works/installations/memories/memories-6.jpg",revision:"d5ccdf29f475af5590bde670a0fa4edc"},{url:"/images/works/installations/memories/memories-7.jpg",revision:"9a61355a831b00716aa0fdb979a99d19"},{url:"/images/works/installations/memories/memories-8.jpg",revision:"24c1a3d2df54375c050815eda21185e7"},{url:"/images/works/installations/memories/memories-9.jpg",revision:"aa2d801258815d7ef906dc23419135e4"},{url:"/images/works/installations/metamorphosis/metamorphosis-1.jpg",revision:"981c21c91a7492ae7503257907717560"},{url:"/images/works/installations/metamorphosis/metamorphosis-2.jpg",revision:"69264289fb5805cd86e8d0cc2f928e69"},{url:"/images/works/installations/metamorphosis/metamorphosis-3.jpg",revision:"483d56ce221737e7973689a30b41069f"},{url:"/images/works/installations/profound/profound-1.jpg",revision:"3bcbcc5da8c5491d3e882108cdd0d5e1"},{url:"/images/works/installations/profound/profound-2.jpg",revision:"68289588fae4268b1395baad2bda7d21"},{url:"/images/works/installations/profound/profound-3.jpg",revision:"0e4f4248ea479b8bb389733d5472e194"},{url:"/images/works/installations/red/red-1.jpg",revision:"b83ea2f397c2648d4eec55ab9ac00928"},{url:"/images/works/installations/red/red-2.jpg",revision:"3c523f1db34a45080b6ce8c5e2cf7fe8"},{url:"/images/works/installations/red/red-3.jpg",revision:"a64dc150f0f7b804fadcd46131acc186"},{url:"/images/works/installations/secretion/secretion-1.jpg",revision:"1b95a247652d6638aff0e70fcdaea6b6"},{url:"/images/works/installations/secretion/secretion-2.jpg",revision:"5133d4f83159000e977f20c6fb828252"},{url:"/images/works/installations/secretion/secretion-3.jpg",revision:"14bd9a2440667965d84f007270535373"},{url:"/images/works/installations/secretion/secretion-4.jpg",revision:"b0696541df5513c05857fe0c3fe33ceb"},{url:"/images/works/installations/shadow/shadow-1.jpg",revision:"ce8401553bf0fe516732101b447cb508"},{url:"/images/works/installations/shadow/shadow-2.jpg",revision:"ea572dad8d1a9cc7150f7791815d9def"},{url:"/images/works/installations/shadow/shadow-3.jpg",revision:"a54376c2c09a7dd6aa9dd7630ece3a62"},{url:"/images/works/installations/skin/skin-1.jpg",revision:"abfc9fe72c335f9ad86d6acb4f4eec16"},{url:"/images/works/installations/skin/skin-2.jpg",revision:"d66f2cecff0e223f8f266b412b5057cd"},{url:"/images/works/installations/skin/skin-3.jpg",revision:"21051731903659718b6754647e9c443f"},{url:"/images/works/installations/synapsis/synapsis-1.jpg",revision:"bba459995d1774dd3c73786363182c25"},{url:"/images/works/installations/synapsis/synapsis-2.jpg",revision:"622aafdfda617b40469dba6cb97b79d8"},{url:"/images/works/installations/synapsis/synapsis-3.jpg",revision:"b2713879c34340af9f7ab6d172bf5ee6"},{url:"/images/works/installations/synapsis/synapsis-4.jpg",revision:"4c059a48d992e1aa432d3b69b9527ca0"},{url:"/images/works/installations/synapsis/synapsis-5.jpg",revision:"12daa4b3f1fd1a6c68d19dedd527987b"},{url:"/images/works/installations/synapsis/synapsis-6.jpg",revision:"9fbeee13da70a8631216c289e5ad1d56"},{url:"/images/works/installations/tied-hands/tied-hands-1.jpg",revision:"22726d989dc6e44c37e625c978b602ed"},{url:"/images/works/installations/tied-hands/tied-hands-2.jpg",revision:"4dce58fcd50f9897c47db0174414ec2e"},{url:"/images/works/installations/tied-hands/tied-hands-3.jpg",revision:"93321473bf2b1b399299d77028e6a13e"},{url:"/images/works/installations/tied-hands/tied-hands-4.jpg",revision:"fcaeb7367814b7c8dfa3f298cae65434"},{url:"/images/works/installations/tied-hands/tied-hands-5.jpg",revision:"884a44c15ef932023ad80e09cc34c1d9"},{url:"/images/works/installations/tied-hands/tied-hands-6.jpg",revision:"25fb0b9dbe1ba7ce4c2ca5b2a2cb579a"},{url:"/images/works/installations/tied-hands/tied-hands-7.jpg",revision:"52b36aa70573f55bb5ec1a361774c4ef"},{url:"/images/works/installations/tied-hands/tied-hands-8.jpg",revision:"a4c6e5490c64949585e4e43effff212f"},{url:"/images/works/installations/tied-hands/tied-hands-9.jpg",revision:"a90014cab8d9ca16f09d89e914a14c99"},{url:"/images/works/installations/transition/transition-1.jpg",revision:"766e861a9c0e348e8b879d5b7af68341"},{url:"/images/works/installations/transition/transition-2.jpg",revision:"7e2d4163f202fc4c333a898cdce24079"},{url:"/images/works/installations/transition/transition-3.jpg",revision:"82ff52e28cd023532fcf2923f8d7cc60"},{url:"/images/works/installations/untitled1/Picture 065.jpg",revision:"59b4c94fc55c1117c4a50982522ffeb3"},{url:"/images/works/installations/untitled1/untitled1-1.jpg",revision:"7f03d06fef38d144e2d85e2b87c34dca"},{url:"/images/works/installations/untitled1/untitled1-2.jpg",revision:"225c4a864765e6260a0e0a19ce89a0df"},{url:"/images/works/installations/untitled1/untitled1-3.jpg",revision:"2364c27bb611f8d2ab371aa2d6555ce3"},{url:"/images/works/installations/untitled1/untitled1-4.jpg",revision:"3d577c39d639dd288d189387fcad17f3"},{url:"/images/works/installations/untitled1/untitled1-5.jpg",revision:"487810bfcdf9b9aad62a65e6046c22a3"},{url:"/images/works/installations/untitled1/untitled1-6.jpg",revision:"0dd23dc2838e09015df74153936819f8"},{url:"/images/works/installations/untitled1/untitled1-7.jpg",revision:"42ccbf802336c577c78aa58ea299d049"},{url:"/images/works/photography/oblivion/oblivion-1.JPG",revision:"0199d07659f14b30fdab079811e00d45"},{url:"/images/works/photography/oblivion/oblivion-2.JPG",revision:"3fb9a3e9cc85dfccef884b28d8102d00"},{url:"/images/works/photography/oblivion/oblivion-3.jpg",revision:"cb1a0eab48e4e1353d3f175bcb86960d"},{url:"/images/works/photography/oblivion/oblivion-4.jpg",revision:"5b785b5f8648b561dc10a4102635a6db"},{url:"/images/works/sculptures/bite-by-bite/bite-by-bite-1.jpg",revision:"5720bc4463b1c21d00fab059aba1b7a9"},{url:"/images/works/sculptures/bite-by-bite/bite-by-bite-2.jpg",revision:"5dc599fd817293150a1cade9a5b8412b"},{url:"/images/works/sculptures/bite-by-bite/bite-by-bite-3.jpg",revision:"ab1efc3ad3bb701484e1779e1c684acb"},{url:"/images/works/sculptures/bitter-sweet/bitter-sweet-1.jpg",revision:"61c209bf006177a00202391c5e41c80e"},{url:"/images/works/sculptures/bitter-sweet/bitter-sweet-2.jpg",revision:"5d48a2de55a0d0afa5ede465fdac4c6b"},{url:"/images/works/sculptures/deadly-beauty/deadly-beauty-1.jpg",revision:"4d73e71443d762d6297c3f2fc565afd7"},{url:"/images/works/sculptures/deadly-beauty/deadly-beauty-2.jpg",revision:"e0b8844c8702fedddae67367f38963d2"},{url:"/images/works/sculptures/deadly-beauty/deadly-beauty-3.jpg",revision:"9ffeff4eda6bfe6768c7c23b64ab00f8"},{url:"/images/works/sculptures/deadly-beauty/deadly-beauty-4.jpg",revision:"0a55e430bc0c87fb3786a479754ce41c"},{url:"/images/works/sculptures/deadly-beauty/deadly-beauty-5.jpg",revision:"f95174ec38ccc85400f836c09f47cd4b"},{url:"/images/works/sculptures/fading-path/fading-path-1.jpg",revision:"8916634e7f0782f09a25398fe867bd3b"},{url:"/images/works/sculptures/fading-path/fading-path-2.jpg",revision:"b1cbe871d07e25746ff9c51ec01edb0b"},{url:"/images/works/sculptures/fading-path/fading-path-3.jpg",revision:"15f8e5304b63d2f9fcd2a93c70e71c2d"},{url:"/images/works/sculptures/fading-path/fading-path-4.jpg",revision:"5b7fee6b78f6fb86476543482aabaee7"},{url:"/images/works/sculptures/fading-path/fading-path-5.jpg",revision:"ba03602027fced1d4e811bb7670f9184"},{url:"/images/works/sculptures/fading-path/fading-path-6.jpg",revision:"a3cc9d92811ef1616f76e7d33dfa0ba8"},{url:"/images/works/sculptures/fading-path/fading-path-7.jpg",revision:"8be0ec039ebc307de807cd0e660a95ed"},{url:"/images/works/sculptures/falling-angle/falling-angle-1.jpg",revision:"4dbbd6c0fb5cd7d5bd2cb0baaead901a"},{url:"/images/works/sculptures/falling-angle/falling-angle-2.jpg",revision:"2c32c89d1816d297cade1550003d17e4"},{url:"/images/works/sculptures/fragility/fragility-1.jpg",revision:"5b85ded085bd4edf1ffa8208336a6508"},{url:"/images/works/sculptures/fragility/fragility-2.jpg",revision:"732822328ff031b5b3ecc6e2234f504d"},{url:"/images/works/sculptures/golden-flavor/golden-flavor-1.jpg",revision:"678a8881739d0a1b03115baa0add124a"},{url:"/images/works/sculptures/golden-flavor/golden-flavor-2.jpg",revision:"6b4b047fc61b02ed64b9a8943c62f1ce"},{url:"/images/works/sculptures/inner-reflection/inner-reflection-1.jpg",revision:"f0231d0f87e506582be0fa307144a985"},{url:"/images/works/sculptures/inner-reflection/inner-reflection-2.jpg",revision:"24bbb23ca89f216d8930dd9e850fa616"},{url:"/images/works/sculptures/inner-reflection/inner-reflection-3.jpg",revision:"a7da0ad4640059476a5be578f93f7318"},{url:"/images/works/sculptures/last-flight-of-the-phoenix/phoenix-1.jpg",revision:"215e45c52147fba15b630e3dfad005a8"},{url:"/images/works/sculptures/last-flight-of-the-phoenix/phoenix-2.jpg",revision:"deb43a3b69f7c7db8f1d4ff7bf3f5fd3"},{url:"/images/works/sculptures/last-flight-of-the-phoenix/phoenix-3.jpg",revision:"1734f398b22a572ed37a04e3c48be99c"},{url:"/images/works/sculptures/last-flight-of-the-phoenix/phoenix-4.jpg",revision:"b7cdec124b76f2588a53c16d5360063d"},{url:"/images/works/sculptures/last-flight-of-the-phoenix/phoenix-5.jpg",revision:"c412cfa43b3ee7ad37f3391132130b3f"},{url:"/images/works/sculptures/lost-garden/2.jpg",revision:"a65df20463bc5179a04a6711853d0ff9"},{url:"/images/works/sculptures/lost-garden/20150708_143152 (1).jpg",revision:"01104a5e0a4de37c2bf77826fc1d6a0c"},{url:"/images/works/sculptures/lost-garden/6.jpg",revision:"7565d9991e568ddb69e7026493f64d03"},{url:"/images/works/sculptures/lost-garden/IMAG1065.jpg",revision:"1d666e33b26b588755d55ae00e1a442f"},{url:"/images/works/sculptures/lost-garden/IMAG1067.jpg",revision:"4ec5b7ecf11836363bf56248f9c34787"},{url:"/images/works/sculptures/lost-garden/lost-garden-1.jpg",revision:"d8b410e2a6c0b6f5516cc9cc72025285"},{url:"/images/works/sculptures/lost-garden/lost-garden-2.jpg",revision:"e7e847cf88e0f79cb42908a98318305b"},{url:"/images/works/sculptures/lost-garden/lost-garden-3.jpg",revision:"98c2b7c6ae21a1ce8330f88529a2d966"},{url:"/images/works/sculptures/lost-garden/lost-garden-4.jpg",revision:"e17c1eb84360371d81739cd5e95c1e9b"},{url:"/images/works/sculptures/lost-garden/lost-garden-5.jpg",revision:"633c88443ed3a7375aa6896dc938ccfb"},{url:"/images/works/sculptures/lost-garden/lost-garden-6.jpg",revision:"66745d00248bb30c1ae30f215300139f"},{url:"/images/works/sculptures/lost-garden/lost-garden-7.jpg",revision:"62381d5b8262bc09c25242262b2312ea"},{url:"/images/works/sculptures/roentgen/roentgen-1.jpg",revision:"2a893465cb438ec0a585bf5bdd15dd22"},{url:"/images/works/sculptures/roentgen/roentgen-2.jpg",revision:"5f8aaf7f6ae64db5ae5aff7b7c4ac15f"},{url:"/images/works/sculptures/roentgen/roentgen-3.jpg",revision:"2d6d2877ddeac843344a00eb1c1b5ffc"},{url:"/images/works/sculptures/roentgen/roentgen-4.jpg",revision:"b2ff80d2f8ece0ca4ca85da47854b8c0"},{url:"/images/works/sculptures/savage-beauty/savage-beauty-1.jpg",revision:"381ba795e4f63795fa13f66f93c9272b"},{url:"/images/works/sculptures/savage-beauty/savage-beauty-2.jpg",revision:"eb42101dfeec78575c1d9ee615078e53"},{url:"/images/works/sculptures/savage-beauty/savage-beauty-3.jpg",revision:"987ed8db312a74caa522f2e92aaf9239"},{url:"/images/works/sculptures/savage-beauty/savage-beauty-4.jpg",revision:"7c268c4f473221465165954be637de09"},{url:"/images/works/sculptures/self-portrait/self-portrait-1.jpg",revision:"fdc45dbc8f2d8d7cabc5ce71cc74f7a2"},{url:"/images/works/sculptures/self-portrait/self-portrait-2.jpg",revision:"7e9e663ffa47f4891132daa0babb7c75"},{url:"/images/works/sculptures/self-portrait/self-portrait-3.jpg",revision:"2ab7586832e457b810b30dafd3d153ec"},{url:"/images/works/sculptures/self-portrait/self-portrait-4.jpg",revision:"25db104c4c794f1317167e8c105de4ce"},{url:"/images/works/sculptures/untitled1/untitled1-1.jpg",revision:"c9c160b08b1ad8f99ce1703e495c8cab"},{url:"/images/works/sculptures/untitled1/untitled1-2.jpg",revision:"20dbb397525ece07f1a692cb862c3a94"},{url:"/images/works/sculptures/untitled1/untitled1-3.jpg",revision:"9f374af9da0ba4f7c6c8a0db611da470"},{url:"/images/works/sculptures/untitled2/untitled2-1.jpg",revision:"a74eb2f1ec63c2afcbf18a9cd711567a"},{url:"/images/works/sculptures/untitled2/untitled2-2.jpg",revision:"d40d72f46c59b67a2a1ba17a6591bc4d"},{url:"/images/works/sculptures/untitled2/untitled2-3.jpg",revision:"b88c513b4779341ebabe47c9ec8e4182"},{url:"/images/works/sculptures/untitled2/untitled2-4.jpg",revision:"349ed55c73dbdefa6bf3820c714c786b"},{url:"/images/works/video-art/trust/trust-1.JPG",revision:"0199d07659f14b30fdab079811e00d45"},{url:"/locales/en-US/comments.json",revision:"1a670d98e1c0bf65c46d45106faf3ed0"},{url:"/locales/en-US/common.json",revision:"fb5f34ba5bde53be2b2114f5c85ca4cf"},{url:"/locales/en-US/contact.json",revision:"6188b493f2d5efbd15d615ab7a2aec46"},{url:"/locales/en-US/destination.json",revision:"6217fb645992fb15fe35a6ab748f3dee"},{url:"/locales/en-US/error.json",revision:"4967c41ca7514f5924ed11776018cf9b"},{url:"/locales/en-US/footer.json",revision:"e82a5b2a5f3fd8074b8694c37117fcca"},{url:"/locales/en-US/nav.json",revision:"f5f40e49ab548957aa6c550745e60488"},{url:"/locales/en-US/offline.json",revision:"32a5cd06117ba8f8f0d6d38b43586530"},{url:"/locales/en-US/shop.json",revision:"9845a60d9c17af0fb3a60a3a63b619e1"},{url:"/locales/es-AR/comments.json",revision:"3d2d41e5e957a20e66a6d52fa2999e3f"},{url:"/locales/es-AR/common.json",revision:"50b3ddd578f6496c9ed9ff8b00da4b8d"},{url:"/locales/es-AR/contact.json",revision:"2c140c2f0f503859c9cd1a628d4bbadd"},{url:"/locales/es-AR/destination.json",revision:"d00e1b0ed57007929949619ca08fb9e1"},{url:"/locales/es-AR/error.json",revision:"bb6116d8da99993fe513eb8119b5d555"},{url:"/locales/es-AR/footer.json",revision:"da1560326759f363b936234af3917d1b"},{url:"/locales/es-AR/nav.json",revision:"14460cd2d1b30436b5590801e4ace7c6"},{url:"/locales/es-AR/offline.json",revision:"5b9a44bdb45b55024f8526f85b491355"},{url:"/locales/es-AR/shop.json",revision:"7847e0d2dac3cfd35aaa3ed9edf80666"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/videos/vic3.mp4",revision:"9a15395c6bf0dc6fc5e95966fb785eed"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
