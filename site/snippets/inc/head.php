<!doctype html>
<html lang="en">
<head>
  
  <title><?= $site->title() ?> | <?= $page->title() ?></title>
	 
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description"           content="<?= e($page->meta_description()->isNotEmpty(), $page->meta_description()) ?>">
  <meta name="keywords"              content="<?= e($page->meta_keywords()->isNotEmpty(), $page->meta_keywords()) ?>">
  <meta name="author"                content="Wunderman Thompson Belgium">
  
  <meta property="og:type"           content="website">
  <meta property="og:title"          content="<?= e($page->fb_title()->isNotEmpty(), $page->fb_title()) ?>">
  <meta property="og:sitename"       content="<?= $site->title() ?>">
  <meta property="og:description"    content="<?= e($page->fb_description()->isNotEmpty(), $page->fb_description()) ?>">
  <meta property="og:url"            content="<?= $page->url() ?>">
  <meta property="og:image"          content="<?= $page->share_image()->isNotEmpty(), $page->share_image()->toFile()->crop(600,315)->url() ?>" />
  <meta property="og:image:width"    content="600">
  <meta property="og:image:height"   content="315">

  <meta property="twitter:card" content="summary">
  <meta property="twitter:title" content="<?= e($page->tw_title()->isNotEmpty(), $page->tw_title()) ?>">
  <meta property="twitter:description" content="<?= e($page->tw_description()->isNotEmpty(), $page->tw_description()) ?>">
  <meta property="twitter:image" content="<?= $page->share_image()->isNotEmpty(), $page->share_image()->toFile()->crop(600,315)->url() ?>" />
  <meta property="twitter:url" content="<?= $page->url() ?>">
	
  <meta name="format-detection" content="telephone=no">
  
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NF8DZ5V');</script>
  <!-- End Google Tag Manager -->

	<link rel="shortcut icon" href="favicon.ico" />
  
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet">

  <?= css(['assets/styles/main.css', '@auto']) ?>
	
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF8DZ5V"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <div id="theBody" class="page--<?= $page->template() ?>">
	   <div id="theBucket">