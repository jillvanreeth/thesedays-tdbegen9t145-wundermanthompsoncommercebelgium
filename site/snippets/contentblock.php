<?php
	
	$layout = $section->visual_alignment()->value() == 'right' ? 'switch-layout' : ''; 

	$backgroundColor = $section->background_color()->isNotEmpty() ?  'bgc--'.strtolower($section->background_color()->text()) : 'bgc--white';

	$fontColor = $section->font_color()->isNotEmpty() ?  'fc--'.strtolower($section->font_color()->text()) : 'fc--black';
	
	$highlightColor = $section->highlight_color()->isNotEmpty() ?  strtolower($section->highlight_color()->text()) : 'blue';

	$alignment = $section->description_alignment(); 

	$tracking = $section->cta_label()->isNotEmpty() && $section->cta_select() == 'emailfield' ? "'event': 'wundermancommerceEvent', 'dlCategory':'Button click', 'dlAction':'Send email', 'dlLabel':''" : "'event': 'wundermancommerceEvent', 'dlCategory':'Button click', 'dlAction':'". preg_replace('/[^a-zA-Z0-9\s]/', '',$section->title()) ."', 'dlLabel':''";

?>

<section id="<?= $section->title()->slug() ?>" class="contentblock <?php echo $fontColor; ?>">
	
	<div class="contentblock__inner <?php echo $backgroundColor;?> <?= e($section->background_color()->isNotEmpty(), 'extra-spacing') ?>">
		<?php if($section->title_toggle()->value() == 'true'): ?>
			<h2 class="contentblock__title"><?= $section->title() ?></h2>
		<?php endif; ?>

		<div class="contentblock__content <?php echo $layout; ?>">	
			<div class="contentblock__theContent <?= e($section->description_alignment()->isNotEmpty(), 'ta--'.$alignment) ?>">
				<?php if($section->subtitle()->isNotEmpty() && $section->subtitle_toggle() == true): ?>
					<h3 class="contentblock__subtitle">	
						<?= e($section->highlighted_subtitle()->isNotEmpty(),  '<strong class="fc--'.$highlightColor.'">'.$section->highlighted_subtitle().'</strong>') ?>
						<?= $section->subtitle() ?>
					</h3>
				<?php endif; ?>

				<div class="contentblock__theBody richTextContent">
					<?= $section->description()->kirbytext() ?>
				</div>
				
				
				<?php if($section->cta_label()->isNotEmpty() && $section->cta_toggle()->value() == 'true'): ?>
					<div class="contentblock__cta">
						<a class="button button--<?php echo $highlightColor; ?>" href="<?= e( $section->cta_select() == 'emailfield', 'mailto:'.$section->cta_email(), $section->cta_url()) ?>" <?= e( $section->cta_select() == 'urlfield', 'target="_blank"')?> onclick="dataLayer.push({<?php echo $tracking ?>});" >
							<span class="button__label"><?= $section->cta_label() ?></span>
						</a>
					</div>
				<?php endif; ?>
			</div>
		
		<?php if($section->visual()->isNotEmpty()): ?>
			<figure class="contentblock__visual">
				<img src="<?= $section->visual()->toFile()->resize(400)->url() ?>" alt="" />
			</figure>
		<?php endif; ?>
		</div>
		
	</div>

</section>