var urunDuzeniTipi = 0; //Urun duzen tipi
var mobilBlokCozunurluk = 768; //Mobil dinamikblok
var sliderZoomCozunurluk = 768; //mobilOzelSlider
var isHoverCartProduct = false; //Hover da kapatma
var kategoriMenuAcikGetir = true; //Kategorimenu tum kirilim
var urunDetayZoomCozunurluk = 1025; //Urun resim slider 
var windowidth = document.documentElement.clientWidth; //window width orani
var urunDetay_varyasyonSecili = false; //varyasyon secme ve secmeme
var sepeteEkleUyariAktif = true; //sepete ekleme popup

$(document).ready(function () {

    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>');
if($('.cariOdemeContainer').length > 0){
$('.navigation .navUl').wrapAll('<div></div>');
}
if (globalModel.pageType == 'cart' || globalModel.pageType == 'ordercomplete' || globalModel.pageType == 'payment' || globalModel.pageType == 'ordercompleted') { SepetEkrani(); }//Sepet islemleri

    $('body').prepend('<div id="overlay"></div>');

    if (windowidth > 768) {
        $('.welcome').insertAfter('.hText .pull-right')
    }
    $('.Linkmenu').insertAfter('.HeaderMenu2')
    $('.headerContent').append('<div class="favicon"><a href="/Hesabim.aspx#/Favorilerim"><i class="fa fa-heart"></i>' + translateIt("Favorilerim_Baslik") + '</a></div>')

    var breadHtml = $('ul.breadcrumb').html();
    $('ul.breadcrumb').after('<div class="breadList" style="display:none;"><div class="mBread"><ul class="breadcrumbList">' + breadHtml + '</ul></div><div class="clbtn"><i class="fa fa-times"></i></div></div>');
    var liS = $(".breadcrumbList li");
    $(".breadcrumbList li").each(function (index) {
        if (index > 0) {
            var ul = $("<ul/>");
            $(this).appendTo(ul);
            ul.appendTo(liS[index - 1]);
        }
    });
    $('.breadcrumb').on("click", function () {
        $('.breadList').addClass('breadActive').show();
        $(this).addClass('zindex');
    });
    $('.clbtn').on("click", function () {
        $('.breadList').removeClass('breadActive').hide();
        $('.breadcrumb').removeClass('zindex');
    });

    $(".landing-block .productItem").each(function () {
        if ($(this).find('.productIconWrap').length>0) {$(this).find(".productImage").after('<div class="productIconWrap"></div>'); }
        $(this).find(".urunListStokUyari").appendTo($(this).find(".productIconWrap"));
        $(this).find(".ozelAlan1").appendTo($(this).find(".productIconWrap"));
        $(this).find(".quickViewIco").appendTo($(this).find(".productIconWrap"));
        $(this).find(".favori").appendTo($(this).find(".productIconWrap"));
        $(this).find(".mycartIcon").appendTo($(this).find(".productIconWrap"));
        $(this).find(".examineIcon").appendTo($(this).find(".productIconWrap"));

    });
    $(".landing-block .productPrice").find(".regularPrice").closest(".productItem").addClass("IndirimliUrun");
    $(".landing-block .newIcon").closest(".productItem").addClass("YeniUrun");
    $(".landing-block .productItem").find(".TukendiIco").parent().addClass("StokYok");


    $(".categoryTitleText").prependTo(".categoryContainer");

    $('#back-to-top').find('a').html('<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>');

    $('.productItem .favori a').html('<i class="fa fa-heart" aria-hidden="true"></i>');



    $('.markaresmi').insertBefore('.ProductName');
    $('#divMarka').insertBefore('.ProductName');
    $('#divOnyazi').insertAfter('.ProductName');
    $('#divMagazaStok').insertAfter('.ProductName');
    $('#divTahminiTeslimatSuresi').insertAfter('.ProductName');
    $('#divParaPuan').insertAfter('.ProductName');
    $('#divToplamStokAdedi').insertAfter('.ProductName');
    $('#divUrunStokAdedi').insertAfter('.ProductName');
    $('#divTedarikci').insertAfter('.ProductName');
    $('#divBarkod').insertAfter('.ProductName');
    $('.puanVer').insertAfter('.ProductName');
    $('#divUrunKodu').insertAfter('.ProductName');
    $('#divIndirimOrani').prependTo('.PriceList');
    $('#divUrunEkSecenek').insertAfter('.PriceList');

    $('.urunOzellik').insertAfter('.RightDetail');
    $('.odemeTeslimat').prependTo('.homeContainer .centerCount');
    $('#divNewsLetter').prependTo('.ebultenGelecek');
    $(".ProductIcon").insertBefore(".ProductIcon2");
    $('.buyfast').appendTo('.BasketBtn');
    $('.product-social-icon-wrapper').appendTo('.PriceList');

    $(".product-social-icons").on("click", function () {
        var title = $(".ProductName h1 span").text();
        var url = window.location.href;
        var image = "http://" + location.host + "" + $('.Images #imgUrunResim').attr('src') + "";
        var description = "";

        if ($(this).attr("content") == "facebook") {
            window.open("http://www.facebook.com/sharer.php?s=100&p[medium]=100&p[title]=" + $.trim(title) + "&p[images][0]=" + image + "&p[url]=" + url + "&p[summary]=" + $.trim(title) + "&t=" + $.trim(title) + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        } else if ($(this).attr("content") == "twitter") {
            window.open("http://twitter.com/intent/tweet?text=" + $.trim(title) + "&url=" + url + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        } else if ($(this).attr("content") == "googleplus") {
            window.open("https://plus.google.com/share?url=" + url + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        } else if ($(this).attr("content") == "pinterest") {
            window.open("http://pinterest.com/pin/create/button/?url=" + url + "&media=" + image + "&description=" + $.trim(title) + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        }
    });

    $('.riSingle .riUp').html('<i class="fa fa-plus" aria-hidden="true"></i>');
    $('.riSingle .riDown').html('<i class="fa fa-minus" aria-hidden="true"></i>');


    if ($('.categoryTitleText ul li:last-child a').length > 0) {

        var kategoriAdi = $('.categoryTitleText ul li:last-child a').html();
        $('.kategoriResim .kategoriAdi h1').html(kategoriAdi);
    } else {
        var kategoriAdi = $('.categoryTitleText ul li:last-child').html();
        $('.kategoriResim .kategoriAdi h1').html(kategoriAdi);
    }

    $('#divAdetCombo').prependTo('.BasketBtn');


});

var isHoverCartProduct = false;
var mobile = document.documentElement.clientWidth;



function sepetBindRefresh(res) { //Sepet kontrol
    if (typeof res.cart.products != 'undefined') {
        if (res.cart.products.length > 0) {
            $('.mycart').addClass('more');
            $('.CartProduct').addClass('more');
            $('.SepetBlock').addClass('more');
            $('.headerOrderBtn').text(translateIt('SiparisTamamla_Baslik'));
        } else {
            $('.mycart').removeClass('more');
            $('.CartProduct').removeClass('more');
            $('.SepetBlock').removeClass('more');
        }
        $('.CartProduct .SProduct li').each(function () {
            if ($(this).find('.sptAdet').length == 0) {
                $(this).find('a:eq(0) .SepettopAd').after('<div class="sptAdet"></div>');
            }
            $(this).find('.SepettopAd span:eq(0)').wrapAll('<div class="urunAd"></div>');
            $(this).find('.SepettopAd span:eq(1)').wrapAll('<div class="varyAd"></div>');
            $(this).find('.SepetTopAdet').appendTo($(this).find('.sptAdet'));
            $(this).find('.sepetTopSatisBirimi').appendTo($(this).find('.sptAdet'));
            $(this).find('.sptAdet').appendTo($(this).find('.SepettopAd'));
        });
    }

    if (windowidth < 750) {
        //$('.welcome').insertAfter('.headerContent');
        $('.mycart > a').removeAttr('href');
        if ($('.SepetUst').length == 0) {
            $('.CartProduct').prepend('<div class="SepetUst"><div class="seClose"><i class="fa fa-times"></i></div><span>' + translateIt("GlobalMasterPage_Sepetim") + '</span></div>');
        }
        if ($('.CartProduct span').hasClass('spanustSepetteUrunYok')) {
            $('.CartProduct').addClass('SepetBos');
        }
    }
    $('body').on("click", '.mycartClick,.sepetUrunSayisi', function () {
        $('.breadcrumb').removeClass('zindex');
        $('.breadList').removeClass('breadActive').hide();
        $('.mobilMenu').removeClass('acik');
        $('.CartProduct').addClass('animated');
        $('.mobilMenu').removeClass('acik');
        $('.altMenu').removeClass('active');
        $('.ResimliMenu1AltUl').removeClass('active');
        $('.mobilMenu .KatMenu1 > li ul').removeClass('active');
        $('.mobilMenu .navUl ul').removeClass('active');
        $('.mobilMenu .lfMenuAltContent').removeClass('active');
        $('.mobilAcilirMenu').html('<i class="fa fa-angle-right"></i>');
        $('.searchContent').removeClass('active');
        $('.welcome').removeClass('active');
        $('#lang_flag_container').removeClass('selector');
    });
}

$(document).on('click', '.seClose', function () {
    $('.breadcrumb').removeClass('zindex');
    $('.breadList').removeClass('breadActive').hide();
    $('body').removeClass('overflow transform');
    $('.mobilMenu').removeClass('acik');
    $('.altMenu').removeClass('active');
    $('.ResimliMenu1AltUl').removeClass('active');
    $('.mobilMenu .KatMenu1 > li ul').removeClass('active');
    $('.mobilMenu .navUl ul').removeClass('active');
    $('.mobilMenu .lfMenuAltContent').removeClass('active');
    $('.mobilAcilirMenu').html('<i class="fa fa-angle-right"></i>');
    $('.mobilaf').removeClass('acik').removeAttr('style');
    $('.searchContent').removeClass('active');
    $('.welcome').removeClass('active');
    $('.CartProduct').removeClass('animated');
    $('#lang_flag_container').removeClass('selector');
    $('body #divSayfalamaUst .filterBlock').removeClass('active');
})


function UseLogin() {
    if (windowidth > 768) {
        $('.welcome').append('<div class="useLogin"> <div class="useName"><span>' + globalModel.member.memberName + '</span></div> <ul> <li class=""><a href="/Hesabim.aspx#/Siparislerim"><i class="fa fa-angle-right"></i><span>' + translateIt("Siparislerim_Baslik") + '</span></a></li> <li class=""><a href="/Hesabim.aspx#/Hesabim-Anasayfa"><i class="fa fa-angle-right"></i><span>' + translateIt("Hesabim_Baslik") + '</span></a></li> <li class=""><a href="/Hesabim.aspx#/Favorilerim"><i class="fa fa-angle-right"></i><span>' + translateIt("Favorilerim_Baslik") + '</span></a></li> <li class=""><a href="/Hesabim.aspx#/AdresDefterim"><i class="fa fa-angle-right"></i><span>' + translateIt("AdresDefterim_Baslik") + '</span></a></li> <li class=""><a href="/Hesabim.aspx#/IadeTaleplerim"><i class="fa fa-angle-right"></i><span>' + translateIt("IadeTaleplerim_Baslik") + '</span></a></li> <li class=""><a class="kargomNeredeIframe control-item" data-fancybox-type="iframe" href="/kargomnerede.aspx" vspace="500"><i class="fa fa-angle-right"></i><span>' + translateIt("Siparislerim_KargomNerede") + '</span></a></li> <li class="cikisbtn"><a href="/UyeCikis.ashx" onclick="uyeCikisYap()"><i class="fa fa-angle-right"></i><span>' + translateIt("Global_CikisYap") + '</span></a></li> </ul> </div> <style type="text/css"> .useLogin { display: block !important; background: #fff; float: left; padding:0; z-index: 99999; position: absolute; top: 100%; right: 0; box-shadow: 0 0 16px -10px #000; opacity: 0; visibility: hidden;margin-left: -100px; -webkit-transition: all 0.3s ease; -moz-transition: all 0.3s ease; transition: all 0.3s ease; } .welcome:after { position: absolute; left: 0; right: 0; bottom: -15px; height: 15px;} .welcome:hover .useLogin { visibility: visible; opacity: 1; top: 100%; } .useLogin:before, .useLogin:after { bottom: 100%; right: 10px; border: solid transparent;height: 0; width: 0; position: absolute; pointer-events: none; } .useLogin:before { border-color: transparent; border-bottom-color: #f0f0f0; border-width: 9px; margin-left: -9px; } .useLogin:after { border-color: transparent; border-bottom-color: #fff; border-width: 8px; margin-left: -8px; right: 11px; } .useLogin ul{text-align: left;display: block;float: none;} .useLogin ul li{display: block;padding: 0;white-space: nowrap;float: left;clear: both;width: 100%;} .useLogin ul li a{color: #000;font-size: 12px;line-height: 27px;padding: 0 15px;display: block;    font-family: inherit !important;} .useLogin ul li a i{line-height: 27px;margin-right: 6px;font-size: 15px;font-weight: 300;display: inline-block;vertical-align:top;} .useLogin ul li.cikisbtn{background: #e6e6e6;margin-top: 10px;transition: .1s ease-in-out;}.useLogin .useName{display: block;margin-top: 10px;font-size: 12px;line-height: 27px;padding: 0 15px;font-weight:500;text-align: left;cursor: default;color:' + $('.CartProduct .headerOrderBtn').css('background-color') + ';} .useLogin ul li a:hover{color:' + $('.CartProduct .headerOrderBtn').css('background-color') + ';} .useLogin ul li.cikisbtn:hover{background:' + $('.CartProduct .headerOrderBtn').css('background-color') + ';} .useLogin ul li.cikisbtn a:hover{color: #fff;} .welcome:after {content: "";} .useLogin:before, .useLogin:after {content:"";} </style>');
    }
}
$(window).on("load", function () {
    if (siteSettings.isAuthenticated == true) {
        setTimeout(function () {
            UseLogin();
        }, 500);
    }
});

function topMenuCallback() {
    $('#instaStories').appendTo('.headerContent');

    if (!pageInitialized) {

        $(".navUl li , .KatMenu1 li").each(function () {
            if ($(this).find("ul").length > 0) {
                $(this).addClass("ulVar");
            }
        });
    }


    mobileMenu();
    

}

function mobileMenu() { //Mobil Menu ve mobil scriptler
    var menuKopya = $(' .navigation').html();
    $('body').prepend('<div class="mobilMenu"><div class="menuUstBolum"><div class="menuBack"><i class="fa fa-bars"></i><span>Menu</span></div><div class="CloseBtnMenu"><i class="fa fa-times"></i></div></div><div class="menuIcerikAlan">' + menuKopya + '</div></div>');
    $('.headerContent').prepend('<div class="mobilMenuAcButton"><span>Menu</span><i class="fa fa-bars"></i></div><div class="searchClick"><i class="fa fa-search"></i></div><div class="welcomeOpen"><i class="fa fa-user"></i></div><div class="mycartClick"><i class="fa fa-shopping-cart" ></i></div>');
    //Resimli Menu
    if ($('.mobilMenu .ResimliMenu1').length > 0) {
        $('.mobilMenu .ResimliMenu1 li .altMenu').closest('li').append('<div class="ResimliDown"><i class="fa fa-angle-right"></i></div>');
        $('.mobilMenu .ResimliMenu1 li .altmenuSol li ul').closest('li').append('<div class="ResimliDown2"><i class="fa fa-angle-right"></i></div>');
        $('.mobilMenu .altMenuMarkalar').parent().parent().addClass('Markalar');
        var MarkaName = $('.Markalar').find(' > a').html();
        $('.mobilMenu .altMenuMarkalar').prepend('<span><div class="UpBtn"><i class="fa fa-long-arrow-left"></i></div><a>' + MarkaName + '</a></span>');
        $('.ResimliDown').on("click", function (event) {
            if ($(this).find('.fa').hasClass('fa-angle-right')) {
                $(this).closest('li').find('.altMenu').addClass('active');
            } else {
                $(this).closest('li').find('.altMenu').removeClass('active');
            }
        });
        $('.ResimliDown2').on("click", function (event) {
            if ($(this).find('.fa').hasClass('fa-angle-right')) {
                $(this).closest('li').find('.ResimliMenu1AltUl').addClass('active');
            } else {
                $(this).closest('li').find('.ResimliMenu1AltUl').removeClass('active');
            }
        });
        $('.ResimliDown2').each(function (index, el) {
            var ClickMeNa = $(this).parent('li').find('>a').text();
            $(this).closest('li').find('.ResimliMenu1AltUl').prepend('<span><div class="DownBtn"><i class="fa fa-long-arrow-left"></i></div> <a href="">' + ClickMeNa + '</a></span>');
        });
        $('.mobilMenu .altmenuSol > span').prepend('<div class="UpBtn"><i class="fa fa-long-arrow-left"></i></div>');
        $('.DownBtn').on("click", function (event) {
            $('.mobilMenu .ResimliMenu1AltUl').removeClass('active');
            $('.altMenuler').animate({
                scrollTop: 0
            }, 100);
            $('.menuIcerikAlan').animate({
                scrollTop: 0
            }, 100);
        });
        $('.UpBtn').on("click", function (event) {
            $('.altMenu').removeClass('active');
            $('.menuIcerikAlan').animate({
                scrollTop: 0
            }, 100);
        });
    }
    //Resimsiz Menu
    if ($('.HeaderMenu2').length > 0) {
        $('.mobilMenu .HeaderMenu2 > li > ul').closest('li').append('<div class="ResimsizDown"><i class="fa fa-angle-right"></i></div>');
        $('.mobilMenu .HeaderMenu2 > li > ul li ul').closest('li').append('<div class="ResimsizDown2"><i class="fa fa-angle-right"></i></div>');
        $('.ResimsizDown').on("click", function (event) {
            if ($(this).find('.fa').hasClass('fa-angle-right')) {
                $(this).closest('li').find('> ul').addClass('active');
            } else {
                $(this).closest('li').find('> ul').removeClass('active');
            }
        });
        $('.ResimsizDown2').on("click", function (event) {
            if ($(this).find('.fa').hasClass('fa-angle-right')) {
                $(this).closest('li').find('> ul').addClass('active');
                $(this).closest('ul').addClass('over');
            } else {
                $(this).closest('li').find('> ul').removeClass('active');
                $(this).closest('ul').removeClass('over');
            }
        });
        $('.ResimsizDown').each(function (index, el) {
            var Down1 = $(this).parent('li').find('>a').text();
            $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack"><i class="fa fa-long-arrow-left"></i></div> <span>' + Down1 + '</span></span>');
        });
        $('.ResimsizDown2').each(function (index, el) {
            var Down2 = $(this).parent('li').find('>a').text();
            $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack2"><i class="fa fa-long-arrow-left"></i></div> <span>' + Down2 + '</span></span>');
        });
        $('.NoiBack2').on("click", function (event) {
            $(this).parent().parent().removeClass('active');
            $(this).closest('.over').removeClass('over');
            $('.mobilMenu .navUl > li > ul').animate({
                scrollTop: 0
            }, 100);
            $('.menuIcerikAlan').animate({
                scrollTop: 0
            }, 100);
        });
        $('.NoiBack').on("click", function (event) {
            $('.mobilMenu .navUl > li > ul').removeClass('active');
            $('.menuIcerikAlan').animate({
                scrollTop: 0
            }, 100);
        });
    }
    $('.mobilMenu').after('<div class="mobilaf"></div>');
    if ($("#TavsiyeEt,#divYorumYazGiris,.divYorumYaz,.frmTelefonSiparis").length == 0) {
        $('body:not(.sepetimBody)').append('<div class="bottomHead"> <ul> <li class="homeC"> <a href="/"><i class="fa fa-home"></i><span>' + translateIt("GlobalMasterPage_Anasayfa") + '</span></a> </li> <li class="favoC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fa fa-heart"></i><span>' + translateIt("Favorilerim_Baslik") + '</span><div class="favNum"></div></a> </li> <li class="cartC"> <a href="/sepetim.aspx"><i class="fa fa-shopping-cart"></i><span>' + translateIt("GlobalMasterPage_Sepetim") + '</span></a> </li> <li class="welcC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fa fa-user"></i><span>' + translateIt("GlobalMasterPage_MobilUyeGirisi") + '</span></a> </li> </ul> </div>');
    }
    if (siteSettings.isAuthenticated == true) {
        $('.welcC a').attr('href', '/hesabim.aspx');
        $('.favoC a').attr('href', '/Hesabim.aspx/#/Favorilerim');
        $('.welcC span').html(translateIt("GlobalMasterPage_MobilHesabim"));
    }
    $('#divIcerik').on('touchend', function () {
        $('.welcome').removeClass('active');
        $('.searchContent').removeClass('active');
    });
    $('.searchClick').on("click", function (event) {
        $('.breadcrumb').removeClass('zindex');
        $('.breadList').removeClass('breadActive').hide();
        $('.searchContent').toggleClass('active');
        $('.mobilMenu').removeClass('acik');
        $('.altMenu').removeClass('active');
        $('.ResimliMenu1AltUl').removeClass('active');
        $('.mobilMenu .KatMenu1 > li ul').removeClass('active');
        $('.mobilMenu .navUl ul').removeClass('active');
        $('.mobilMenu .lfMenuAltContent').removeClass('active');
        $('.mobilAcilirMenu').html('<i class="fa fa-angle-right"></i>');
        $('.CartProduct').removeClass('animated');
        $('.welcome').removeClass('active');
        $('#lang_flag_container').removeClass('selector');
        $('#txtbxArama').focus();
    });
    $('.welcomeOpen').on("click", function () {
        $('.breadcrumb').removeClass('zindex');
        $('.breadList').removeClass('breadActive').hide();
        $('.welcome').toggleClass('active');
        $('.mobilMenu').removeClass('acik');
        $('.altMenu').removeClass('active');
        $('.ResimliMenu1AltUl').removeClass('active');
        $('.mobilMenu .KatMenu1 > li ul').removeClass('active');
        $('.mobilMenu .navUl ul').removeClass('active');
        $('.mobilMenu .lfMenuAltContent').removeClass('active');
        $('.mobilAcilirMenu').html('<i class="fa fa-angle-right"></i>');
        $('.CartProduct').removeClass('animated');
        $('.searchContent').removeClass('active');
        $('#lang_flag_container').removeClass('selector');
    });
    $('.menuBack').on("click", function () {
        $('.ResimliMenu1AltUl').removeClass('active');
        $('.altMenu').removeClass('active');
        $('.navUl > li ul').removeClass('active');
    });
    $('.mobilMenuAcButton').on("click", function (event) {
        $('.breadcrumb').removeClass('zindex');
        $('.breadList').removeClass('breadActive').hide();
        $('body').addClass('overflow transform');
        $('.mobilMenu').addClass('acik');
        $('.mobilaf').addClass('acik').removeAttr('style');;
        $('.CartProduct').removeClass('animated');
        $('.welcome').removeClass('active');
        $('.searchContent').removeClass('active');
        $('#lang_flag_container').removeClass('selector');
    });
    $('.mobilaf,.CloseBtnMenu').on("click", function (event) {
        $('.breadcrumb').removeClass('zindex');
        $('.breadList').removeClass('breadActive').hide();
        $('body').removeClass('overflow transform');
        $('.mobilMenu').removeClass('acik');
        $('.altMenu').removeClass('active');
        $('.ResimliMenu1AltUl').removeClass('active');
        $('.mobilMenu .KatMenu1 > li ul').removeClass('active');
        $('.mobilMenu .navUl ul').removeClass('active');
        $('.mobilMenu .lfMenuAltContent').removeClass('active');
        $('.mobilAcilirMenu').html('<i class="fa fa-angle-right"></i>');
        $('.mobilaf').removeClass('acik').removeAttr('style');
        $('.searchContent').removeClass('active');
        $('.welcome').removeClass('active');
        $('.CartProduct').removeClass('animated');
        $('#lang_flag_container').removeClass('selector');
        $('body #divSayfalamaUst .filterBlock').removeClass('active');
    });
    $('body').on('click', '.headerCartBtn,.headerOrderBtn', function () {
        $('body').removeClass('overflow transform');
        $('.CartProduct').removeClass('animated');
        $('.mobilaf').removeClass('acik');
    });

}



function blockCompleteCallback() {

    function webApiGet(apiUrl, data, success, error) {
        $.ajax({
            method: "GET",
            url: "/api" + apiUrl,
            data: data,
        })
        .done(function (response) {
            success(response);
        });
    };

    var mobile = document.documentElement.clientWidth;

    if (mobile < 768) {

        var cList = $('.urunTab ul li')

        var cDiv = $('.urunDetayPanel');

        for (var i = 0; i <= cList.length; i++) {

            for (var i = 0; i <= cDiv.length; i++) {

                $(cDiv[i]).appendTo(cList[i]);

            }

        }
        $(".urunDetayPanel").hide();
        $(".urunTab li").removeClass("active");
        $(".urunTab").removeClass().addClass("mobilTab");

        $('.mobilTab li > a').on("click", function () {
            $(this).closest('li').toggleClass('active');
        });


    }
}

function urunDuzeni(tip) {
    $('.sort_hrz').removeClass("Active");
    $('.sort_3').removeClass("Active");
    $('.sort_4').removeClass("Active");
    if (tip == 1) {
        $('.centerCount .ProductList').removeClass().addClass('ProductList pr_hrz');
        $(".centerCount .ItemOrj").removeClass().addClass("ItemOrj col-xs-12");
        $('.sort_hrz').addClass("Active");
    } else if (tip == 2) {
        $('.centerCount .ProductList').removeClass().addClass('ProductList sort_3');
        $(".centerCount .ItemOrj").removeClass().addClass("ItemOrj col-lg-4 col-md-6 col-sm-6 col-xs-6");
        $('.sort_3').addClass("Active");
    } else if (tip == 3) {
        $('.centerCount .ProductList').removeClass().addClass('ProductList sort_4');
        $(".centerCount .ItemOrj").removeClass().addClass("ItemOrj col-lg-3 col-md-3 col-sm-4 col-xs-6");
        $('.blockSelect .sort_4').addClass("Active");

    } else if (tip == 4) {
        $('.centerCount .ProductList').removeClass().addClass('ProductList sort_3');
        $(".centerCount .ItemOrj").removeClass().addClass("ItemOrj col-lg-4 col-md-4 col-sm-6 col-xs-6");
        $('.sort_3').addClass("Active");
    } else if (tip == 5) {
        $('.centerCount .ProductList').removeClass().addClass('ProductList sort_4');
        $(".centerCount .ItemOrj").removeClass().addClass("ItemOrj col-lg-3 col-md-3 col-sm-6 col-xs-6");
        $('.sort_4').addClass("Active");
    }

    if ($('#divSayfalamaUst').length > 0) {
        if ($('.brandlistselection select').length > 0) {
            $('#divSayfalamaUst').addClass('Slct');
        }
        if ($('.FiltreUst').length == 0) {
            $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="tukgo"><a onclick="sortingClick(1000)" class="filterOrderInStock">' + translateIt("Urunler_Stoktakiler") + '</a></div>');
            $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="FiltreUst"><div class="closeFilt"><i class="fa fa-times"></i></div><span>' + translateIt("UrunFiltreleme_Filtreleme") + '</span><a onclick="clearAllFilters()"><i class="fa fa-trash"></i></a></div>');
            if ($('.moreNum').length == 0) {
                $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').find('.panel-heading').append('<div class="moreNum"></div>');
            }
            $('.mobilFilterBtn').on("click", function (event) {
                $('.mobilaf').addClass('acik');
                $('#divSayfalamaUst .filterBlock').addClass('active');
            });
            $('.closeFilt').on("click", function (event) {
                $('.mobilaf').removeClass('acik');
                $('#divSayfalamaUst .filterBlock').removeClass('active');
            });
        }
        $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function (index, el) {
            if ($(this).find('li').hasClass('selected')) {
                var numlen = $(this).find('li.selected').length;
                $(this).addClass('more');
                $(this).find('.moreNum').html(numlen);
            } else {
                $(this).removeClass('more');
                $(this).find('.moreNum').html('');
            }
        });
        $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function (index, el) {
            if ($('#divSayfalamaUst .category-vertical-filters.top-filters .panel').hasClass('more')) {
                $('.FiltreUst a').addClass('active');
                return false;
            } else {
                $('.FiltreUst a').removeClass('active');
            }
        });
        if ($('.sortingContent .filterOrderInStock').hasClass('selected')) {
            $('.tukgo .filterOrderInStock').addClass('selected');
        } else {
            $('.tukgo .filterOrderInStock').removeClass('selected');
        }
        if ($('.sortingContent .sortingButton').length > 0) {
            if ($('.sortingContent .sortingButton > a[onclick="sortingClick(1000)"]').hasClass('selected')) {
                $('.tukgo .filterOrderInStock').addClass('selected');
            } else {
                $('.tukgo .filterOrderInStock').removeClass('selected');
            }
        }
    }


    lazyLoad();
}

function getGalleryImagesCallback() {
    $('.Marquee .owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        navClass: ['ProductListprev', 'ProductListnext'],
        nav: true,
        lazyLoad:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
}

function urunListCallback() {
    if (globalBlokModel == 1) {
        if (urunDuzeniTipi == 0)
            urunDuzeniTipi = 4;
        $(".rightBlock").css('display', 'none');
        $(".leftBlock").addClass("col-md-3 col-lg-3 col-xs-12 col-sm-12");
        $(".centerCount").addClass("solYadaSagAcik col-md-9 col-lg-9 col-xs-12 col-sm-12");
        $('body').on('click', '.blockSelect .sort_hrz', function () {
            urunDuzeniTipi = 1;
            urunDuzeni(urunDuzeniTipi);
        });
        $('body').on('click', '.blockSelect .sort_3', function () {
            urunDuzeniTipi = 4;
            urunDuzeni(urunDuzeniTipi);
        });
        $('body').on('click', '.blockSelect .sort_4', function () {
            urunDuzeniTipi = 3;
            urunDuzeni(urunDuzeniTipi);
        });
    }
    if (globalBlokModel == 2) {
        $('.sort_hrz').hide();
        $('.sort_3').hide();
        $('.sort_4').hide();
        $(".rightBlock").addClass("col-md-3 col-lg-3 col-xs-12 col-sm-12");
        $(".centerCount").addClass("solSagBlokAcik col-md-6 col-lg-6 col-xs-12 col-sm-12");
        $(".leftBlock").addClass("col-md-3 col-lg-3 col-xs-12 col-sm-12");

    }
    if (globalBlokModel == 3) {
        if (urunDuzeniTipi == 0)
            urunDuzeniTipi = 4;
        $('.sort_4').hide();
        $(".leftBlock").css('display', 'none');
        $(".rightBlock").addClass("col-md-3 col-lg-3 col-xs-12 col-sm-12");
        $(".centerCount").addClass("solYadaSagAcik col-md-9 col-lg-9 col-xs-12 col-sm-12");
        $('body').on('click', '.blockSelect .sort_hrz', function () {
            urunDuzeniTipi = 1;
            urunDuzeni(urunDuzeniTipi);
        });
        $('body').on('click', '.blockSelect .sort_3', function () {
            urunDuzeniTipi = 4;
            urunDuzeni(urunDuzeniTipi);
        });
    }
    if (globalBlokModel == 4) {
        if (urunDuzeniTipi == 0)
            urunDuzeniTipi = 3;
        $(".centerCount").addClass("col-md-12 col-lg-12 col-xs-12 col-sm-12");
        $('body').on('click', '.blockSelect .sort_hrz', function () {
            urunDuzeniTipi = 1;
            urunDuzeni(urunDuzeniTipi);
        });
        $('body').on('click', '.blockSelect .sort_3', function () {
            urunDuzeniTipi = 4;
            urunDuzeni(urunDuzeniTipi);
        });
        $('body').on('click', '.blockSelect .sort_4', function () {
            urunDuzeniTipi = 5;
            urunDuzeni(urunDuzeniTipi);
        });
    }
    // Slider

    $('.ticiTopBlockContent .jCarouselLite >ul, .ticiBottomBlockContent .jCarouselLite >ul').each(function () {
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({
                autoplay: true,
                loop: true,
                autoplayTimeout: 2000,
                navClass: ['ProductListprev', 'ProductListnext'],
                autoplaySpeed: 2000,
                autoplayHoverPause: true,
                margin: 30,
                nav: true,
        lazyLoad:true,
                responsive: {
                    0: {
                        items: 2,
                        margin: 10,
                        nav: true
                    },
                    768: {
                        items: 4,
                        nav: true
                    },
                    992: {
                        items: 4,
                        nav: true
                    },
                    1200: {
                        items: 6,
                        nav: true
                    }
                }
            });
    });
    $('.centerCount .jCarouselLite >ul').each(function () {
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({
                autoplay: true,
                loop: false,
                autoplayTimeout: 2000,
                navClass: ['ProductListprev', 'ProductListnext'],
                autoplaySpeed: 2000,
                autoplayHoverPause: true,
                margin: 30,
                nav: true,
        lazyLoad:true,
                responsive: {
                    0: {
                        items: 2,
                        margin: 10,
                        nav: true
                    },
                    768: {
                        items: globalBlokModel == 1 ? 2 : globalBlokModel == 2 ? 2 : globalBlokModel == 3 ? 2 : globalBlokModel == 4 ? 2 : 2,
                        nav: true
                    },
                    992: {
                        items: globalBlokModel == 1 ? 3 : globalBlokModel == 2 ? 3 : globalBlokModel == 3 ? 3 : globalBlokModel == 4 ? 3 : 3,
                        nav: true
                    },
                    1200: {
                        items: globalBlokModel == 1 ? 3 : globalBlokModel == 2 ? 2 : globalBlokModel == 3 ? 3 : globalBlokModel == 4 ? 4 : 4,
                        nav: true
                    }
                }
            });
    });
    $('.leftBlock .jCarouselLite ul').each(function () {if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel")) $(this).owlCarousel({rewind: true, margin: 10, nav: false, lazyLoad:true, responsive:{0: {items: 1},}, onInitialized: function callback() {lazyLoad(); } }); });
    $('.rightBlock .jCarouselLite ul').each(function () {if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel")) $(this).owlCarousel({rewind: true, margin: 10, nav: false, lazyLoad:true, responsive:{0: {items: 1},}, onInitialized: function callback() {lazyLoad(); } }); });

    urunDuzeni(urunDuzeniTipi);


   $(".panel-search input").length > 0 ? $(".panel-search input").attr("placeholder", translateIt("BlokModul_UrunArama_Ara") + "...") : "";
    $(window).on('scroll',function () {
        if ($('.jCarouselLite[data-lazy-function]').length > 0) { lazyLoad(); }
    });

    urunKartCallBack();
}


function SepetEkrani() {//Sepet ekrani
    $('.navigation .navUl').wrapAll('<div></div>');
    $('.Mic').insertAfter('.navUl');
    setTimeout(function(){var wle = $('.welcome').html(); $('.welcome').html(''); $('.welcome').append('<div>'+wle+'</div>'); },1500);
    if ($('.sepett').find('div').length>0) {$('.mycart').addClass('more');}
    if ($('.BasketDetailCargo').length>0) {$('.mycart').addClass('more');}
    if ($('.odemeMenuContent').length>0) {$('.mycart').addClass('more');}
    urunKartCallBack();
}
function urunKartCallBack() {
    $(".productPrice").find(".regularPrice").closest(".productItem").addClass("IndirimliUrun");
    $(".newIcon").closest(".productItem").addClass("YeniUrun");
    $(".productItem").find("video").parent().addClass("Videolu");
    $(".productItem").find(".TukendiIco").parent().addClass("StokYok");
    $(".productPrice").find(".regularPrice").parent().addClass("IndirimVar");
    $(".sliderBannerContainer .productItem").find("video").parent().addClass("Videolu");

    $(".productItem").each(function () {
        if ($(this).find('.productIconWrap').length>0) {$(this).find(".productImage").after('<div class="productIconWrap"></div>'); }
        $(this).find(".urunListStokUyari").appendTo($(this).find(".productIconWrap"));
        $(this).find(".ozelAlan1").appendTo($(this).find(".productIconWrap"));
        $(this).find(".quickViewIco").appendTo($(this).find(".productIconWrap"));
        $(this).find(".favori").appendTo($(this).find(".productIconWrap"));
        $(this).find(".mycartIcon").appendTo($(this).find(".productIconWrap"));
        $(this).find(".examineIcon").appendTo($(this).find(".productIconWrap"));
    });
}
