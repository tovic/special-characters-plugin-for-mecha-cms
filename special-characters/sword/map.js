(function(w, d, base) {

    if (typeof base.composer == "undefined") return;

    var cm = [
        ['160', 'no-break space'],
        ['38', 'ampersand'],
        ['34', 'quotation mark'],
        // finance
        ['162', 'cent sign'],
        ['8364', 'euro sign'],
        ['163', 'pound sign'],
        ['165', 'yen sign'],
        // signs
        ['169', 'copyright sign'],
        ['174', 'registered sign'],
        ['8482', 'trade mark sign'],
        ['8240', 'per mille sign'],
        ['181', 'micro sign'],
        ['183', 'middle dot'],
        ['8226', 'bullet'],
        ['8230', 'three dot leader'],
        ['8242', 'minutes / feet'],
        ['8243', 'seconds / inches'],
        ['167', 'section sign'],
        ['182', 'paragraph sign'],
        ['223', 'sharp s / ess-zed'],
        // quotations
        ['8249', 'single left-pointing angle quotation mark'],
        ['8250', 'single right-pointing angle quotation mark'],
        ['171', 'left pointing guillemet'],
        ['187', 'right pointing guillemet'],
        ['8216', 'left single quotation mark'],
        ['8217', 'right single quotation mark'],
        ['8220', 'left double quotation mark'],
        ['8221', 'right double quotation mark'],
        ['8218', 'single low-9 quotation mark'],
        ['8222', 'double low-9 quotation mark'],
        ['60', 'less-than sign'],
        ['62', 'greater-than sign'],
        ['8804', 'less-than or equal to'],
        ['8805', 'greater-than or equal to'],
        ['8211', 'en dash'],
        ['8212', 'em dash'],
        ['175', 'macron'],
        ['8254', 'overline'],
        ['164', 'currency sign'],
        ['166', 'broken bar'],
        ['168', 'diaeresis'],
        ['161', 'inverted exclamation mark'],
        ['191', 'turned question mark'],
        ['710', 'circumflex accent'],
        ['732', 'small tilde'],
        ['176', 'degree sign'],
        ['8722', 'minus sign'],
        ['177', 'plus-minus sign'],
        ['247', 'division sign'],
        ['8260', 'fraction slash'],
        ['215', 'multiplication sign'],
        ['185', 'superscript one'],
        ['178', 'superscript two'],
        ['179', 'superscript three'],
        ['188', 'fraction one quarter'],
        ['189', 'fraction one half'],
        ['190', 'fraction three quarters'],
        // math / logical
        ['402', 'function / florin'],
        ['8747', 'integral'],
        ['8721', 'n-ary sumation'],
        ['8734', 'infinity'],
        ['8730', 'square root'],
        ['8764', 'similar to'],
        ['8773', 'approximately equal to'],
        ['8776', 'almost equal to'],
        ['8800', 'not equal to'],
        ['8801', 'identical to'],
        ['8712', 'element of'],
        ['8713', 'not an element of'],
        ['8715', 'contains as member'],
        ['8719', 'n-ary product'],
        ['8743', 'logical and'],
        ['8744', 'logical or'],
        ['172', 'not sign'],
        ['8745', 'intersection'],
        ['8746', 'union'],
        ['8706', 'partial differential'],
        ['8704', 'for all'],
        ['8707', 'there exists'],
        ['8709', 'diameter'],
        ['8711', 'backward difference'],
        ['8727', 'asterisk operator'],
        ['8733', 'proportional to'],
        ['8736', 'angle'],
        // undefined
        ['180', 'acute accent'],
        ['184', 'cedilla'],
        ['170', 'feminine ordinal indicator'],
        ['186', 'masculine ordinal indicator'],
        ['8224', 'dagger'],
        ['8225', 'double dagger'],
        // alphabetical special chars
        ['192', 'A \u2013 grave'],
        ['193', 'A \u2013 acute'],
        ['194', 'A \u2013 circumflex'],
        ['195', 'A \u2013 tilde'],
        ['196', 'A \u2013 diaeresis'],
        ['197', 'A \u2013 ring above'],
        ['198', 'ligature AE'],
        ['199', 'C \u2013 cedilla'],
        ['200', 'E \u2013 grave'],
        ['201', 'E \u2013 acute'],
        ['202', 'E \u2013 circumflex'],
        ['203', 'E \u2013 diaeresis'],
        ['204', 'I \u2013 grave'],
        ['205', 'I \u2013 acute'],
        ['206', 'I \u2013 circumflex'],
        ['207', 'I \u2013 diaeresis'],
        ['208', 'ETH'],
        ['209', 'N \u2013 tilde'],
        ['210', 'O \u2013 grave'],
        ['211', 'O \u2013 acute'],
        ['212', 'O \u2013 circumflex'],
        ['213', 'O \u2013 tilde'],
        ['214', 'O \u2013 diaeresis'],
        ['216', 'O \u2013 slash'],
        ['338', 'ligature OE'],
        ['352', 'S \u2013 caron'],
        ['217', 'U \u2013 grave'],
        ['218', 'U \u2013 acute'],
        ['219', 'U \u2013 circumflex'],
        ['220', 'U \u2013 diaeresis'],
        ['221', 'Y \u2013 acute'],
        ['376', 'Y \u2013 diaeresis'],
        ['222', 'THORN'],
        ['224', 'a \u2013 grave'],
        ['225', 'a \u2013 acute'],
        ['226', 'a \u2013 circumflex'],
        ['227', 'a \u2013 tilde'],
        ['228', 'a \u2013 diaeresis'],
        ['229', 'a \u2013 ring above'],
        ['230', 'ligature ae'],
        ['231', 'c \u2013 cedilla'],
        ['232', 'e \u2013 grave'],
        ['233', 'e \u2013 acute'],
        ['234', 'e \u2013 circumflex'],
        ['235', 'e \u2013 diaeresis'],
        ['236', 'i \u2013 grave'],
        ['237', 'i \u2013 acute'],
        ['238', 'i \u2013 circumflex'],
        ['239', 'i \u2013 diaeresis'],
        ['240', 'eth'],
        ['241', 'n \u2013 tilde'],
        ['242', 'o \u2013 grave'],
        ['243', 'o \u2013 acute'],
        ['244', 'o \u2013 circumflex'],
        ['245', 'o \u2013 tilde'],
        ['246', 'o \u2013 diaeresis'],
        ['248', 'o slash'],
        ['339', 'ligature oe'],
        ['353', 's \u2013 caron'],
        ['249', 'u \u2013 grave'],
        ['250', 'u \u2013 acute'],
        ['251', 'u \u2013 circumflex'],
        ['252', 'u \u2013 diaeresis'],
        ['253', 'y \u2013 acute'],
        ['254', 'thorn'],
        ['255', 'y \u2013 diaeresis'],
        ['913', 'Alpha'],
        ['914', 'Beta'],
        ['915', 'Gamma'],
        ['916', 'Delta'],
        ['917', 'Epsilon'],
        ['918', 'Zeta'],
        ['919', 'Eta'],
        ['920', 'Theta'],
        ['921', 'Iota'],
        ['922', 'Kappa'],
        ['923', 'Lambda'],
        ['924', 'Mu'],
        ['925', 'Nu'],
        ['926', 'Xi'],
        ['927', 'Omicron'],
        ['928', 'Pi'],
        ['929', 'Rho'],
        ['931', 'Sigma'],
        ['932', 'Tau'],
        ['933', 'Upsilon'],
        ['934', 'Phi'],
        ['935', 'Chi'],
        ['936', 'Psi'],
        ['937', 'Omega'],
        ['945', 'alpha'],
        ['946', 'beta'],
        ['947', 'gamma'],
        ['948', 'delta'],
        ['949', 'epsilon'],
        ['950', 'zeta'],
        ['951', 'eta'],
        ['952', 'theta'],
        ['953', 'iota'],
        ['954', 'kappa'],
        ['955', 'lambda'],
        ['956', 'mu'],
        ['957', 'nu'],
        ['958', 'xi'],
        ['959', 'omicron'],
        ['960', 'pi'],
        ['961', 'rho'],
        ['962', 'final sigma'],
        ['963', 'sigma'],
        ['964', 'tau'],
        ['965', 'upsilon'],
        ['966', 'phi'],
        ['967', 'chi'],
        ['968', 'psi'],
        ['969', 'omega'],
        // symbols
        ['8501', 'alef symbol'],
        ['982', 'pi symbol'],
        ['8476', 'real part symbol'],
        ['978', 'upsilon \u2013 hook symbol'],
        ['8472', 'Weierstrass p'],
        ['8465', 'imaginary part'],
        // arrows
        ['8592', 'leftwards arrow'],
        ['8593', 'upwards arrow'],
        ['8594', 'rightwards arrow'],
        ['8595', 'downwards arrow'],
        ['8596', 'left right arrow'],
        ['8629', 'carriage return'],
        ['8656', 'leftwards double arrow'],
        ['8657', 'upwards double arrow'],
        ['8658', 'rightwards double arrow'],
        ['8659', 'downwards double arrow'],
        ['8660', 'left right double arrow'],
        ['8756', 'therefore'],
        ['8834', 'subset of'],
        ['8835', 'superset of'],
        ['8836', 'not a subset of'],
        ['8838', 'subset of or equal to'],
        ['8839', 'superset of or equal to'],
        ['8853', 'circled plus'],
        ['8855', 'circled times'],
        ['8869', 'perpendicular'],
        ['8901', 'dot operator'],
        ['8968', 'left ceiling'],
        ['8969', 'right ceiling'],
        ['8970', 'left floor'],
        ['8971', 'right floor'],
        ['9001', 'left-pointing angle bracket'],
        ['9002', 'right-pointing angle bracket'],
        ['9674', 'lozenge'],
        ['9824', 'black spade suit'],
        ['9827', 'black club suit'],
        ['9829', 'black heart suit'],
        ['9830', 'black diamond suit'],
        ['8194', 'en space'],
        ['8195', 'em space'],
        ['8201', 'thin space'],
        ['8204', 'zero width non-joiner'],
        ['8205', 'zero width joiner'],
        ['8206', 'left-to-right mark'],
        ['8207', 'right-to-left mark'],
        ['173', 'soft hyphen']
    ],
    speak = base.languages.MTE || null,
    container, button_c, button_i, a;

    base.composer.button('at', {
        title: speak.plugin_sc_title_button || 'Special Characters',
        click: function(e, editor) {
            container = d.createElement('div');
            container.className = 'special-character-map';
            for (var i = 0, len = cm.length; i < len; ++i) {
                a = d.createElement('a');
                a.title = cm[i][1];
                a.innerHTML = String.fromCharCode(parseInt(cm[i][0], 10));
                a.href = '#';
                a.onclick = function() {
                    var c = this.className,
                        s = /(^| )selected( |$)/.test(c);
                    this.className = s ? c.replace(/(^| )selected( |$)/g, '$1$2') : c + ' selected';
                    return false;
                };
                a.ondblclick = function() {
                    base.composer.grip.insert(this.innerHTML);
                    base.composer.close(true);
                    return false;
                };
                container.appendChild(a);
            }
            editor.modal('special-character', function(overlay, modal) {
                button_c = d.createElement('button');
                button_c.innerHTML = speak.buttons.cancel;
                button_c.onclick = function() {
                    modal.children[1].removeChild(container);
                    editor.close(true);
                    return false;
                };
                button_i = d.createElement('button');
                button_i.innerHTML = speak.buttons.ok || 'OK';
                button_i.onclick = function() {
                    var aa = container.children, ii = "";
                    for (var i = 0, len = aa.length; i < len; ++i) {
                        if (/(^| )selected( |$)/.test(aa[i].className)) {
                            ii += aa[i].innerHTML;
                        }
                    }
                    editor.grip.insert(ii);
                    modal.children[1].removeChild(container);
                    editor.close(true);
                    return false;
                };
                modal.children[0].innerHTML = speak.plugin_sc_title_modal || 'Select Special Character';
                modal.children[1].appendChild(container);
                modal.children[2].appendChild(button_i);
                modal.children[2].appendChild(button_c);
            });
        }
    });

})(window, document, DASHBOARD);