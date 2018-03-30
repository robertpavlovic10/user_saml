OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Kullanıcı hesabı devre dışı bırakılmış. Lütfen yöneticiniz ile görüşün.",
    "Saved" : "Kaydedildi",
    "Unknown error, please check the log file for more details." : "Bilinmeyen bir sorun çıktı. Ayrıntılı bilgi almak için günlük dosyalarına bakın.",
    "Direct log in" : "Doğrudan oturum açma",
    "SSO & SAML log in" : "SSO ve SAML oturum açma",
    "X.509 certificate of the Service Provider" : "Hizmet sağlayıcının X.509 sertifikası",
    "Private key of the Service Provider" : "Hizmet sağlayıcının özel anahtarı",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:logoutRequest> NameID değerinin şifrelenmiş olup olmayacağını gösterir.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:AuthnRequest> iletilerinin imzalanmış olup olmayacağını gösterir [bu bilgi hizmet sağlayıcının üst verilerinde bulunur].",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:logoutRequest> iletilerinin imzalanmış olup olmayacağını gösterir.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:logoutResponse> iletilerinin imzalanmış olup olmayacağını gösterir.",
    "Whether the metadata should be signed." : "Üst verilerin imzalanmasının gerekip gerekmediği.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Bu hizmet sağlayıcı tarafından alınan <samlp:Response>, <samlp:LogoutRequest> ve <samlp:LogoutResponse> bileşenleri için isteğin imzalanmış olup olmayacağını gösterir.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Bu hizmet sağlayıcı tarafından alınan <samlp:Assertion> bileşenleri için isteğin imzalanmış olup olmayacağını gösterir [bu bilgi hizmet sağlayıcının üst verilerinde bulunur]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Bu hizmet sağlayıcı tarafından alınan <samlp:Assertion>bileşenlerinin şifrelenmiş olup olmayacağını gösterir.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Bu hizmet sağlayıcı tarafından alınan SAMLResponse içindeki zorunlu NameID bileşeninin var olup olmayacağını gösterir.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Bu hizmet sağlayıcı tarafından alınan zorunlu NameID şifrelenmiş olup olmayacağını gösterir.",
    "Indicates if the SP will validate all received XML." : "Hizmet sağlayıcının alınan tüm XML kodlarını doğrulayacağını gösterir.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS SAML verilerindeki adres kodlamalarını küçük harfler ile yaparken araç büyük harf kullanır. İmza doğrulaması bölümündeki ADFS uyumluluğunu etkinleştirin.",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "İsteğe bağlı olarak görüntülenecek kimlik hizmeti sağlayıcının adı (varsayılan: \"SSO ve SAML oturum açma\")",
    "Attribute to map the UID to." : "UID değerinin eşleştirileceği öznitelik.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Kimlik yalnız, hesap başka bir arka sistemde varsa (LDAP gibi) doğrulansın",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Birden çok kullanıcı arka yüzü kullanılabilsin (LDAP gibi)",
    "Attribute to map the displayname to." : "Görüntülenecek ad değerinin eşleştirileceği öznitelik.",
    "Attribute to map the email address to." : "E-posta adresi değerinin eşleştirileceği özellik.",
    "Attribute to map the quota to." : "Kime kotası değerinin eşleştirileceği öznitelik.",
    "Attribute to map the users groups to." : "Kulanıcı grupları değerinin eşleştirileceği öznitelik.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "%s masaüstü istemcileri için SAML kimlik doğrulaması kullanılsın (kullanıcının kimliğini yeniden doğrulaması gerekir)",
    "SSO & SAML authentication" : "SSO ve SAML kimlik doğrulaması",
    "Open documentation" : "Belgeleri aç",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Kimlik doğrulamasının Nextcloud içindeki SAML hizmet sağlayıcısı mı ortam değişkeni mi kullanılarak mı yapılacağını.",
    "Use built-in SAML authentication" : "İç SAML kimlik doğrulaması kullanılsın",
    "Use environment variable" : "Ortam değişkeni kullanılsın",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\"" : "Kopyaya SSO üzerinden erişebilecek bir yönetici kullanıcı yapılandırdığınızdan emin olun. Bundan sonra \"%s\" seçeneğini etkinleştirmediğiniz sürece normal %s hesabınızı kullanarak oturum açamayacaksınız",
    "General" : "Genel",
    "Service Provider Data" : "Hizmet Sağlayıcı Verileri",
    "If your Service Provider should use certificates you can optionally specify them here." : "Hizmet sağlayıcınızın kullandığı sertifikalar varsa buradan isteğinize göre belirtebilirsiniz.",
    "Show Service Provider settings…" : "Hizmet Sağlayıcı Ayarlarını Görüntüle…",
    "Identity Provider Data" : "Kimlik Sağlayıcı Verileri",
    "Configure your IdP settings here." : "Buradan Kimlik Sağlayıcı ayarlarınızı yapabilirsiniz.",
    "Identifier of the IdP entity (must be a URI)" : "Kimlik Sağlayıcı varlığının belirteci (bir adres olmalı)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Hizmet sağlayıcının Kimlik Doğrulama İsteği İletisini gödereceği Kimlik Sağlayıcı hedef adresini yazın",
    "Show optional Identity Provider settings…" : "İsteğe bağlı ek Kimlik Sağlayıcı ayarları…",
    "URL Location of the IdP where the SP will send the SLO Request" : "Hizmet sağlayıcının SLO İsteğini gödereceği Kimlik Sağlayıcı adresini yazın",
    "Public X.509 certificate of the IdP" : "Kimlik Sağlayıcının herkese açık X.509 sertifikası",
    "Attribute mapping" : "Öznitelik eşleştirme",
    "If you want to optionally map attributes to the user you can configure these here." : "Öznitelikler isteğe bağlı olarak kullanıcı ile buradan eşleştirilebilir.",
    "Show attribute mapping settings…" : "Öznitelik eşleştirme ayarlarını görüntüle…",
    "Security settings" : "Güvenlik ayarları",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Arttırılmış güvenlik için ortamınız tarafından destekleniyorsa şu seçenekleri etkinleştirmeniz önerilir.",
    "Show security settings…" : "Güvenlik ayarlarını görüntüle…",
    "Signatures and encryption offered" : "Önerilen imza ve şifreleme",
    "Signatures and encryption required" : "Gereken imza ve şifreleme",
    "Download metadata XML" : "Üst veri XML dosyasını indir",
    "Metadata invalid" : "Üst veri geçersiz",
    "Metadata valid" : "Üst veri geçerli",
    "Account not provisioned." : "Hesabınız hazır değil.",
    "Your account is not provisioned, access to this service is thus not possible." : "Hesabınız hazır olmadığından bu hizmeti kullanamazsınız.",
    "Indicates if the SP will validate all received XMLs." : "Hizmet sağlayıcının tüm alınan XML dosyalarını doğrulayacağını gösterir.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Bir hesap yalnız başka bir arka sistemde varsa (LDAP gibi) kimliği doğrulansın",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Bir yönetici kullanıcısı için ayarların kopyaya SSO üzerinden erişebilecek şekilde yapıldığından emin olun. Bundan sonra normal %shesabınızı kullanarak oturum açamayacaksınız.",
    "Show Service Provider settings ..." : "Hizmet Sağlayıcı Ayarlarını Görüntüle ...",
    "Show optional Identity Provider settings ..." : "İsteğe bağlı ek Kimlik Sağlayıcı ayarları ...",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "SAML öznitelikleri isteğe bağlı olarak kullanıcı ile buradan eşleştirilebilir.",
    "Show attribute mapping settings ..." : "Öznitelik eşleştirme ayarlarını görüntüle ...",
    "Show security settings ..." : "Güvenlik ayarlarını görüntüle ..."
},
"nplurals=2; plural=(n > 1);");
