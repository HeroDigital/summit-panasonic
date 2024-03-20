import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  block.innerHTML = `
  <div class="footer-middle site-footer__middle">
  <div class="l-container">
    <div class="l-row">
        <div class="region region--footer">
  


<div id="block-topfooter" class="block block--block-content block--block-content431b48ba-320b-45c1-8ee3-a856d309583c">



      <div class="l-col l-col--sm-span-6-of-6 l-col--span-6-of-12 l-col--md-span-12-of-12">
    <nav class="footer-middle__nav" aria-label="Primary Footer Links">
      <ul class="link-list footer-middle__link-list footer-middle__link-list--col-2">
        

                <li class="field__item link-list__item">
      <a href="https://www.panasonic.com/us/corporate.html" class="link" target="_blank" rel="noopener"><span class="link__text-wrapper">About Us</span></a>
    </li>
                    <li class="field__item link-list__item">
      <a href="https://na.panasonic.com/us/press-releases" class="link"><span class="link__text-wrapper">News</span></a>
    </li>
                    <li class="field__item link-list__item">
      <a href="https://careers.na.panasonic.com" class="link" target="_blank" rel="noopener"><span class="link__text-wrapper">Careers</span></a>
    </li>
                    <li class="field__item link-list__item">
      <a href="https://www.panasonic.com/global/corporate/ir.html" class="link" target="_blank" rel="noopener"><span class="link__text-wrapper">Investor Relations</span></a>
    </li>
                    <li class="field__item link-list__item">
      <a href="/us/social-impact" class="link"><span class="link__text-wrapper">Social Impact</span></a>
    </li>
                    <li class="field__item link-list__item">
      <a href="/us/contact-us" class="link"><span class="link__text-wrapper">Contact Us</span></a>
    </li>
                    <li class="field__item link-list__item">
      <a href="https://panasonic.tap.thinksmart.com/prod/Portal/ShowWorkFlow/AnonymousEmbed/70573f26-bbca-49d0-856b-bcb76bfa18d0" class="link" target="_blank" rel="noopener"><span class="link__text-wrapper">Do Not Sell My Data</span></a>
    </li>
                    <li class="field__item link-list__item">
      <a href="/us/accessibility-statement" class="link"><span class="link__text-wrapper">Accessibility Statement</span></a>
    </li>
        
      </ul>
    </nav>
  </div>


<div class="l-col l-col--sm-span-6-of-6 l-col--span-6-of-12 l-col--md-span-12-of-12">

        <div class="l-row footer-middle__cols-combo">
  
                        <div class="l-col l-col--sm-span-6-of-6 l-col--span-6-of-12">
      
        <div class="get-latest footer-middle__get-latest">
                          <h2 class="get-latest__title">
              Get the Latest on Panasonic Trends
            </h2>
          
          <div class="get-latest__form">
                            
        <div class="field field--name-field-webform-reference field--type-webform field--label-hidden field__item"><span id="webform-submission-pna-webform-4790-block-content-16-form-ajax-content"></span><div id="webform-submission-pna-webform-4790-block-content-16-form-ajax" class="webform-ajax-form-wrapper" data-effect="fade" data-progress-type="throbber">


<form id="pna_webform_4790" name="PNA Webform - 4790" webformtype="Prospect-Form" webformsubtype="Newsletter-(Latest-Trends)" class="webform-submission-form webform-submission-add-form webform-submission-pna-webform-4790-form webform-submission-pna-webform-4790-add-form webform-submission-pna-webform-4790-block_content-16-form webform-submission-pna-webform-4790-block_content-16-add-form webform-id-pna_webform_4790 webform-type-Prospect-Form webform-subtype-Newsletter-(Latest-Trends) js-webform-details-toggle webform-details-toggle antibot webform-id-pna_webform_4790 webform-type-Prospect-Form webform-subtype-Newsletter-(Latest-Trends) web-form" data-drupal-selector="webform-submission-pna-webform-4790-block-content-16-add-form-2" data-action="/us/" action="/us/" method="post" accept-charset="UTF-8" target="_parent" data-once="form-updated webform-details-toggle webform-analytic-proceed" data-drupal-form-fields="edit-email-address--6,edit-country--6,edit-actions-submit--6,edit-hpt-email--6">

<noscript>
<div class="antibot-no-js antibot-message antibot-message-warning">You must have JavaScript enabled to use this form.</div>
</noscript>
<div id="edit-required-fields-legend--6" class="js-form-item form-item js-form-type-processed-text form-type-processed-text js-form-item- form-item- form-no-label">
    <p>*&nbsp;Indicates a required field</p>

    </div>
<div class="js-form-item form-item js-form-type-email form-type-email js-form-item-email-address form-item-email-address input-text input-text--email-wrapper get-in-touch-form__input-text">
  <label for="edit-email-address--6" class="js-form-required form-required input-text__label">Email address</label>
    <input pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$" data-drupal-selector="edit-email-address" type="email" id="edit-email-address--6" name="email_address" value="" size="60" maxlength="254" class="form-email required input-text__input" required="required" aria-required="true">

    </div>
<div class="js-webform-states-hidden js-form-item form-item js-form-type-select form-type-select js-form-item-country form-item-country select-box--country select-box get-in-touch-form__input-text" style="display: none;">
  <label for="edit-country--6" class="input-text__label">Country</label>
    <div class="select-box__select-wrapper">
<select data-drupal-selector="edit-country" id="edit-country--6" name="country" class="form-select select-box__select" data-drupal-states="{&quot;visible&quot;:{&quot;.webform-submission-pna-webform-4790-block_content-16-add-form :input[name=\u0022email_address\u0022]&quot;:{&quot;filled&quot;:true}},&quot;required&quot;:{&quot;.webform-submission-pna-webform-4790-block_content-16-add-form :input[name=\u0022email_address\u0022]&quot;:{&quot;filled&quot;:true}}}">
                    <option value="" selected="selected">- Select -</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Ascension Island">Ascension Island</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="British Virgin Islands">British Virgin Islands</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Canary Islands">Canary Islands</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Caribbean Netherlands">Caribbean Netherlands</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Ceuta &amp; Melilla">Ceuta &amp; Melilla</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Clipperton Island">Clipperton Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo - Brazzaville">Congo - Brazzaville</option>
                            <option value="Congo - Kinshasa">Congo - Kinshasa</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Curaçao">Curaçao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czechia">Czechia</option>
                            <option value="Côte d’Ivoire">Côte d’Ivoire</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Diego Garcia">Diego Garcia</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Eswatini">Eswatini</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">Falkland Islands</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard &amp; McDonald Islands">Heard &amp; McDonald Islands</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong SAR China">Hong Kong SAR China</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Laos">Laos</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libya">Libya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao SAR China">Macao SAR China</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia">Micronesia</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="North Korea">North Korea</option>
                            <option value="North Macedonia">North Macedonia</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Outlying Oceania">Outlying Oceania</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territories">Palestinian Territories</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn Islands">Pitcairn Islands</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Réunion">Réunion</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Sint Maarten">Sint Maarten</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia &amp; South Sandwich Islands">South Georgia &amp; South Sandwich Islands</option>
                            <option value="South Korea">South Korea</option>
                            <option value="South Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="St. Barthélemy">St. Barthélemy</option>
                            <option value="St. Helena">St. Helena</option>
                            <option value="St. Kitts &amp; Nevis">St. Kitts &amp; Nevis</option>
                            <option value="St. Lucia">St. Lucia</option>
                            <option value="St. Martin">St. Martin</option>
                            <option value="St. Pierre &amp; Miquelon">St. Pierre &amp; Miquelon</option>
                            <option value="St. Vincent &amp; Grenadines">St. Vincent &amp; Grenadines</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard &amp; Jan Mayen">Svalbard &amp; Jan Mayen</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syria</option>
                            <option value="São Tomé &amp; Príncipe">São Tomé &amp; Príncipe</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-Leste">Timor-Leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
                            <option value="Tristan da Cunha">Tristan da Cunha</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks &amp; Caicos Islands">Turks &amp; Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="U.S. Outlying Islands">U.S. Outlying Islands</option>
                            <option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Vatican City">Vatican City</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Wallis &amp; Futuna">Wallis &amp; Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                            <option value="Åland Islands">Åland Islands</option>
              </select>
</div>

    </div>
<div data-drupal-selector="edit-hidden-fields" id="edit-hidden-fields--6" class="js-form-wrapper form-wrapper"><input data-drupal-selector="edit-utm-campaign" type="hidden" name="utm_campaign" value="[current-page:query:utm_campaign]"><input data-drupal-selector="edit-utm-medium" type="hidden" name="utm_medium" value="[current-page:query:utm_medium]"><input data-drupal-selector="edit-utm-source" type="hidden" name="utm_source" value="[current-page:query:utm_source]"><input data-drupal-selector="edit-utm-term" type="hidden" name="utm_term" value="[current-page:query:utm_term]"><input data-drupal-selector="edit-utm-content" type="hidden" name="utm_content" value="[current-page:query:utm_content]"><input data-drupal-selector="edit-language" type="hidden" name="language" value="English"><input data-drupal-selector="edit-most-recent-lead-source" type="hidden" name="most_recent_lead_source" value="PNA Webform - 4790 (Sales)
https://na.panasonic.com/us/panasonic-north-america-create-today-enrich-tomorrow "><input data-drupal-selector="edit-product-category" type="hidden" name="product_category" value=""><input data-drupal-selector="edit-lead-source" type="hidden" name="lead_source" value="Website"><input data-drupal-selector="edit-lead-status" type="hidden" name="lead_status" value="Engaged"><input data-drupal-selector="edit-drupal-submitted" type="hidden" name="drupal_submitted" value="1"><input data-drupal-selector="edit-last-submission-date" type="hidden" name="last_submission_date" value=""><input data-drupal-selector="edit-campaign-code-pssna" type="hidden" name="campaign_code_pssna" value=""><input data-drupal-selector="edit-campaign-code-pna" type="hidden" name="campaign_code_pna" value="PNA-000001"><input data-drupal-selector="edit-campaign-code-plsca" type="hidden" name="campaign_code_plsca" value=""><input data-drupal-selector="edit-routing-code" type="hidden" name="routing_code" value="00"><input data-drupal-selector="edit-last-name" type="hidden" name="last_name" value="unknown"><input data-drupal-selector="edit-company-name" type="hidden" name="company_name" value="unknown"></div>
<div data-drupal-selector="edit-actions" class="form-actions webform-actions js-form-wrapper form-wrapper" id="edit-actions--11"><input class="webform-button--submit button button--primary js-form-submit form-submit btn btn--primary get-in-touch-form__form-submit" data-drupal-selector="edit-actions-submit-6" data-disable-refocus="true" type="submit" id="edit-actions-submit--6" name="op" value="SUBSCRIBE" data-once="drupal-ajax">

</div>
<input autocomplete="off" data-drupal-selector="form-nwmy7ebd3zgnpz7ivrqtmr3jtzvaa0qvjmszqoalleg" type="hidden" name="form_build_id" value="form-nwMY7ebD3ZgNPz7ivRQTMr3jtZVAA0QVJMsZqoAlLeg"><input data-drupal-selector="edit-webform-submission-pna-webform-4790-block-content-16-add-form-2" type="hidden" name="form_id" value="webform_submission_pna_webform_4790_block_content_16_add_form"><input data-drupal-selector="edit-antibot-key" type="hidden" name="antibot_key" value="oboJAp7KGYcwfJ4K3z0OWS-8PFd6JORkoT_3CruYX_E"><div class="hpt_email-textfield js-form-wrapper form-wrapper" style="display: none !important;"><div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-hpt-email form-item-hpt-email">
  <label for="edit-hpt-email--6" class="input-text__label">Leave this field blank</label>
    <input autocomplete="off" data-drupal-selector="edit-hpt-email" type="text" id="edit-hpt-email--6" name="hpt_email" value="" size="20" maxlength="128" class="form-text input-text__input">

    </div>
</div>



</form>
</div></div>
  
          </div>
        </div>

                </div>
              
            <div class="l-col l-col--sm-span-6-of-6 l-col--span-6-of-12">
    
      <div class="social-block footer-middle__social-block">
        
<div>

        <h2 class="field field--name-field-footer-social-title field--type-string field--label-hidden social-block__title field__item">Connect with us</h2>
  
  <ul class="social-block__links-list">
          <li class="social-block__list-item">
      
        <a href="https://www.facebook.com/Panasonic" target="_blank" class="btn social-block__btn 0" rel="nofollow noopener">
    <span class="visually-hidden">Facebook</span>
    <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 28.3.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg class="feather icon feather-facebook " aria-hidden="true" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 320 512" style="enable-background:new 0 0 320 512;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
</style>
<path class="st0" d="M279.1,288l14.2-92.7h-88.9v-60.1c0-25.3,12.4-50.1,52.2-50.1h40.4V6.3c0,0-36.7-6.3-71.7-6.3
	c-73.2,0-121.1,44.4-121.1,124.7v70.6H22.9V288h81.4v224h100.2V288H279.1z"/>
</svg>

  </a>
  
    </li>
          <li class="social-block__list-item">
      
        <a href="https://www.linkedin.com/company/panasonic-northamerica/" target="_blank" class="btn social-block__btn 0" rel="nofollow noopener">
    <span class="visually-hidden">Linkedin</span>
    <?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 28.3.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg class="feather icon feather-linkedin " aria-hidden="true" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 448 512" style="enable-background:new 0 0 448 512;" xml:space="preserve">
    <style type="text/css">
      .st0{fill:#FFFFFF;}
    </style>
    <path class="st0" d="M100.3,448H7.4V148.9h92.9V448z M53.8,108.1C24.1,108.1,0,83.5,0,53.8C0,24.1,24.1,0,53.8,0
      c29.7,0,53.8,24.1,53.8,53.8C107.6,83.5,83.5,108.1,53.8,108.1z M447.9,448h-92.7V302.4c0-34.7-0.7-79.2-48.3-79.2
      c-48.3,0-55.7,37.7-55.7,76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5,42.7-48.3,87.9-48.3c94,0,111.3,61.9,111.3,142.3V448H447.9z
      "/>
    </svg>
    
  </a>
  
    </li>
          <li class="social-block__list-item">
      
        <a href="https://www.instagram.com/panasonic/" target="_blank" class="btn social-block__btn 0" rel="nofollow noopener">
    <span class="visually-hidden">Instagram Link</span>
    <?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 28.3.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg class="feather icon feather-instagram " aria-hidden="true" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 448 512" style="enable-background:new 0 0 448 512;" xml:space="preserve">
    <style type="text/css">
      .st0{fill:#FFFFFF;}
    </style>
    <path class="st0" d="M224.1,141c-63.6,0-114.9,51.3-114.9,114.9s51.3,114.9,114.9,114.9S339,319.5,339,255.9S287.7,141,224.1,141z
       M224.1,330.6c-41.1,0-74.7-33.5-74.7-74.7s33.5-74.7,74.7-74.7s74.7,33.5,74.7,74.7S265.2,330.6,224.1,330.6L224.1,330.6z
       M370.5,136.3c0,14.9-12,26.8-26.8,26.8c-14.9,0-26.8-12-26.8-26.8s12-26.8,26.8-26.8S370.5,121.5,370.5,136.3z M446.6,163.5
      c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9,0C95.8,35.1,64,43.3,37.7,69.5
      s-34.4,58-36.2,93.9c-2.1,37-2.1,147.9,0,184.9c1.7,35.9,9.9,67.7,36.2,93.9s58,34.4,93.9,36.2c37,2.1,147.9,2.1,184.9,0
      c35.9-1.7,67.7-9.9,93.9-36.2c26.2-26.2,34.4-58,36.2-93.9C448.7,311.3,448.7,200.5,446.6,163.5L446.6,163.5z M398.8,388
      c-7.8,19.6-22.9,34.7-42.6,42.6c-29.5,11.7-99.5,9-132.1,9s-102.7,2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6
      c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7,9-132.1c7.8-19.6,22.9-34.7,42.6-42.6c29.5-11.7,99.5-9,132.1-9s102.7-2.6,132.1,9
      c19.6,7.8,34.7,22.9,42.6,42.6c11.7,29.5,9,99.5,9,132.1S410.5,358.6,398.8,388z"/>
    </svg>

  </a>
  
    </li>
          <li class="social-block__list-item">
      
        <a href="https://www.youtube.com/channel/UCZgyCsZQLFF30TCs4uaZFKw" target="_blank" class="btn social-block__btn 0" rel="nofollow noopener">
    <span class="visually-hidden">Youtube</span>
    <?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 28.3.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg class="feather icon feather-youtube " aria-hidden="true" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 576 512" style="enable-background:new 0 0 576 512;" xml:space="preserve">
    <style type="text/css">
      .st0{fill:#FFFFFF;}
    </style>
    <path class="st0" d="M549.7,124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8,64,288,64,288,64S117.2,64,74.6,75.5
      c-23.5,6.3-42,24.9-48.3,48.6c-11.4,42.9-11.4,132.3-11.4,132.3s0,89.4,11.4,132.3c6.3,23.6,24.8,41.5,48.3,47.8
      C117.2,448,288,448,288,448s170.8,0,213.4-11.5c23.5-6.3,42-24.2,48.3-47.8c11.4-42.9,11.4-132.3,11.4-132.3
      S561.1,166.9,549.7,124.1z M232.1,337.6V175.2l142.7,81.2L232.1,337.6L232.1,337.6z"/>
    </svg>
    
  </a>
  
    </li>
      </ul>
</div>

      </div>

                              <div class="footer-middle__country-selector">
          <h2 class="get-latest__title">Select Country/Language</h2>

          <div class="drop-down drop-down--no-border">
<button class="btn drop-down__toggle" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="countries-selection-list">
<span class="drop-down__selected-content">
      <img class="drop-down__menu-item-img" src="/icons/flag-us.svg" width="24" height="16" alt="">
      United States - English
    </span>
<svg class="feather icon feather-chevron-down " aria-hidden="true">
<use href="/themes/custom/pna2018/icons/feather-sprite.svg#chevron-down"></use>
</svg>
</button>
<ul class="drop-down__menu" id="countries-selection-list" hidden="">
                    
  <li class="drop-down__menu-item drop-down__menu-item--selected">
    <a class="drop-down__menu-link" href="https://na.panasonic.com/us">
      <img class="drop-down__menu-item-img" src="/us/themes/custom/pna2018/images/flags/flag-us.svg" width="24" height="16" alt="">
      United States - English
    </a>
  </li>
                    
  <li class="drop-down__menu-item">
    <a class="drop-down__menu-link" href="https://na.panasonic.com/ca">
      <img class="drop-down__menu-item-img" src="/us/themes/custom/pna2018/images/flags/flag-ca.svg" width="24" height="16" alt="">
      Canada - English
    </a>
  </li>
                    
  <li class="drop-down__menu-item">
    <a class="drop-down__menu-link" href="https://na.panasonic.com/ca/fr">
      <img class="drop-down__menu-item-img" src="/us/themes/custom/pna2018/images/flags/flag-ca.svg" width="24" height="16" alt="">
      Canada - Français
    </a>
  </li>
  </ul>
</div>
        </div>
      
            </div>
    
        </div>
      </div>
</div>

</div>

    </div>
  </div>
</div>
<div class="footer-bot site-footer__bot">
      <div class="l-container">
        <div class="l-row">
            <div class="region region--footer-bottom">
    <div id="block-bottomblock" class="block block--block-content block--block-content3d76f5ec-d1c6-4ab4-b28c-7724ff0a6b9c">
  
    
      <div class="l-col l-col--span-5-of-12 l-col--sm-span-6-of-6">
      <div class="copyrights footer-bot__copyrights">
        
            <div class="field field--name-field-foot-copyright-information field--type-string field--label-hidden field__item">© 2024 Panasonic Corporation of North America. All Rights Reserved.</div>
      
      </div>
    </div>
    <div class="footer-bot__last-col l-col l-col--span-7-of-12 l-col--sm-span-6-of-6">
      <nav class="footer-bot__nav footer-bot__nav" aria-label="Secondary Footer Links">
        <ul class="link-list footer-bot__link-list">
          
            <li class="field__item link-list__item"><a href="/us/privacy-policy">Privacy Policy</a></li>
          <li class="field__item link-list__item"><a href="/us/cookie-policy">Cookie Policy</a></li>
          <li class="field__item link-list__item"><a href="/us/terms">Terms</a></li>
      
          
            <li class="field__item link-list__item"><a href="https://www.panasonic.com/global/home.html" target="_blank" rel="noopener">Panasonic Global</a></li>
          <li class="field__item link-list__item"><a href="https://shop.panasonic.com/" target="_blank" rel="noopener">Consumer</a></li>
          <li class="field__item link-list__item"><a href="https://na.industrial.panasonic.com/" target="_blank" rel="noopener">Industrial</a></li>
      
        </ul>
      </nav>
          </div>
  </div>

  </div>

        </div>
      </div>
    </div>
  `
}
