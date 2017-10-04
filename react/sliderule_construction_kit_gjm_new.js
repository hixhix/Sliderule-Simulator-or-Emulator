///////////////////////////////////////////////////////////////////////////////////
//                       Copyright (C) 2017 Robert P. Wolf                       //
//                                                                               //
// Permission is hereby granted, free of charge, to any person obtaining a copy  //
// of this software and associated documentation files (the "Software"), to deal //
// in the Software without restriction, including without limitation the rights  //
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell     //
// copies of the Software, and to permit persons to whom the Software is         //
// furnished to do so, subject to the following conditions:                      //
//                                                                               //
// The above copyright notice and this permission notice shall be included in    //
// all copies or substantial portions of the Software.                           //
//                                                                               //
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR    //
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,      //
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE   //
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER        //
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, //
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN     //
// THE SOFTWARE.                                                                 //
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// GJM: additional draw support for new scales in SCALES_GJM_NEW.JS
///////////////////////////////////////////////////////////////////////////////////

var fn_lin_e = function (value) {return value / Math . log (10);};
var draw_lin_e = function (ctx, length, height, scale) {
  var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
  var limit = 1 + scale . right_extension;
  draw_MRS (ctx, fn_lin_e, length, 0, 5, 0.1, limit, h5);
  draw_005R (ctx, fn_lin_e, length, 0, 5, limit, h3);
  draw_002R (ctx, fn_lin_e, length, 0, 5, limit, h2);
  draw_001R (ctx, fn_lin_e, length, 0, 5, limit, h2);
  limit = - scale . left_extension;
  draw_MLS (ctx, fn_lin_e, length, -1, 0, 0.1, limit, h5);
  draw_005L (ctx, fn_lin_e, length, -1, 0, limit, h3);
  draw_002L (ctx, fn_lin_e, length, -1, 0, limit, h2);
  draw_001L (ctx, fn_lin_e, length, -1, 0, limit, h2);  
};

var fn_pe2 = function (value) {return 1 + Math . log10 (10 * Math . sqrt (1 - value * value));};
var draw_pe2 = function (ctx, length, height, scale) {
  var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
  var location = fn_pe2 (0.99996); if (location > - scale . left_extension) mmark (ctx, ".99996", length * location, h5);
  location = fn_pe2 (0.99997); if (location > - scale . left_extension) mark (ctx, ".99997", length * location, h5);
  mark (ctx, ".99995", length * fn_pe2 (0.99995), h5);
  mark (ctx, ".9999", length * fn_pe2 (0.9999), h5);
  mark (ctx, ".9998", length * fn_pe2 (0.9998), h5);
  mark (ctx, ".9997", length * fn_pe2 (0.9997), h5);
  mark (ctx, ".9996", length * fn_pe2 (0.9996), h5);
  mark (ctx, ".9995", length * fn_pe2 (0.9995), h5);
  mark (ctx, ".9994", length * fn_pe2 (0.9994), h5);
  mark (ctx, ".9993", length * fn_pe2 (0.9993), h5);
  mark (ctx, "", length * fn_pe2 (0.9992), h5);
  mark (ctx, "", length * fn_pe2 (0.9991), h5);
  mark (ctx, ".999", length * fn_pe2 (0.999), h5);
  mark (ctx, ".998", length * fn_pe2 (0.998), h5);
  mark (ctx, ".997", length * fn_pe2 (0.997), h5);
  mark (ctx, ".996", length * fn_pe2 (0.996), h5);
  mark (ctx, ".995", length * fn_pe2 (0.995), h5);
  location = fn_pe2 (0.994); if (location < scale . right_extension + 1) mark (ctx, ".994", length * location, h5);
  location = fn_pe2 (0.993); if (location < scale . right_extension + 1) mark (ctx, ".993", length * location, h5);
  draw_XRI (ctx, fn_pe2, length, 0.995, 0.993, 1 + scale . right_extension, h3, 0.001, 0.0005, 0.001);
  draw_XRI (ctx, fn_pe2, length, 0.995, 0.993, 1 + scale . right_extension, h2, 0.0005, 0.0001, 0.0005);
  draw_XLI (ctx, fn_pe2, length, 0.999, 0.995, - scale . left_extension, h4, 0.001, 0.0005, 0.001);
  draw_XLI (ctx, fn_pe2, length, 0.999, 0.995, - scale . left_extension, h3, 0.0005, 0.0001, 0.0005);
  draw_XLI (ctx, fn_pe2, length, 0.998, 0.995, - scale . left_extension, h2, 0.0001, 0.00005, 0.0001);
  draw_XLI (ctx, fn_pe2, length, 0.999, 0.998, - scale . left_extension, h2, 0.0001, 0.00002, 0.0001);
  draw_XLI (ctx, fn_pe2, length, 0.9995, 0.999, - scale . left_extension, h2, 0.00005, 0.00001, 0.00005);
  draw_XLI (ctx, fn_pe2, length, 0.9995, 0.999, - scale . left_extension, h4, 0.0001, 0.00005, 0.0001);
  draw_XLI (ctx, fn_pe2, length, 0.9999, 0.9995, - scale . left_extension, h4, 0.0001, 0.00005, 0.0001);
  draw_XLI (ctx, fn_pe2, length, 0.9999, 0.9995, - scale . left_extension, h3, 0.00005, 0.00001, 0.00005);
  draw_XLI (ctx, fn_pe2, length, 0.9998, 0.9995, - scale . left_extension, h2, 0.00001, 0.000005, 0.00001);
  draw_XLI (ctx, fn_pe2, length, 0.9999, 0.9998, - scale . left_extension, h2, 0.00001, 0.000002, 0.00001);
  draw_XLI (ctx, fn_pe2, length, 1, 0.9999, - scale . left_extension, h4, 0.00005, 0.00001, 0.00005);
  draw_XLI (ctx, fn_pe2, length, 1, 0.9999, - scale . left_extension, h3, 0.00001, 0.000005, 0.00001);
  draw_XLI (ctx, fn_pe2, length, 1, 0.9999, - scale . left_extension, h2, 0.000005, 0.000001, 0.000005);
};

var fn_ph2 = function (x) {return Math . log10 (Math . sqrt (x * x - 1));};
var draw_ph2 = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
//	draw_MRS (ctx, fn_ph2, length, 1.01, 1.05, 0.01, 1, h5);
//	draw_MRS (ctx, fn_ph2, length, 1.1, 1.2, 0.05, 1, h5);
	var limit = 1 + s . right_extension;
	draw_MRS (ctx, fn_ph2, length, 2.0, 12.0, 0.5, limit, h5);
	draw_XR (ctx, fn_ph2, length, 10, 15, limit, h2, 0.5, 0.1, 0.5);
	limit = - s . left_extension;
	draw_MLS (ctx, fn_ph2, length, 1.1, 2.0, 0.1, limit, h5);
	draw_XL (ctx, fn_ph2, length, 1.1, 2, limit, h4, 0.5, 0.1, 0.5);
	draw_XL (ctx, fn_ph2, length, 1.1, 2, limit, h3, 0.1, 0.05, 0.1);
	draw_XL (ctx, fn_ph2, length, 1.1, 2, limit, h2, 0.05, 0.01, 0.05);
	draw_XL (ctx, fn_ph2, length, 2, 3, limit, h3, 0.5, 0.1, 0.5);
	draw_XL (ctx, fn_ph2, length, 2, 3, limit, h2, 0.1, 0.02, 0.1);
	draw_XL (ctx, fn_ph2, length, 3, 10, limit, h4, 1, 0.5, 1);
	draw_XL (ctx, fn_ph2, length, 3, 10, limit, h3, 0.5, 0.1, 0.5);
	draw_XL (ctx, fn_ph2, length, 3, 10, limit, h2, 0.1, 0.05, 0.1);
};

var fn_pt = function (x) {return Math . log10 (Math . sqrt (x * x + 1));};
var draw_pt = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var limit = 1 + s . right_extension;
	draw_MRS (ctx, fn_pt, length, 0, 12, 0.5, limit, h5);
	draw_XR (ctx, fn_pt, length, 0, 12, limit, h3, 0.5, 0.1, 0.5);
	draw_XR (ctx, fn_pt, length, 0.2, 0.5, limit, h2, 0.1, 0.05, 0.1);
	draw_XR (ctx, fn_pt, length, 0.5, 4.0, limit, h2, 0.5, 0.02, 0.5);
	draw_XR (ctx, fn_pt, length, 4, 12, limit, h2, 0.1, 0.05, 0.1);
};

var fn_pt2 = function (x) {return Math . log10 (Math . sqrt (x * x + 1)) - 1;};
var draw_pt2 = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var limit = 1 + s . right_extension;
	draw_MRS (ctx, fn_pt2, length, 10, 20, 1, limit, h5);
	draw_MRS (ctx, fn_pt2, length, 20, 120, 10, limit, h5);
	draw_XR (ctx, fn_pt2, length, 10, 20, limit, h3, 1, 0.5, 1);
	draw_XR (ctx, fn_pt2, length, 10, 20, limit, h2, 0.5, 0.1, 0.5);
	draw_XR (ctx, fn_pt2, length, 20, 120, limit, h4, 10, 5, 10);
	draw_XR (ctx, fn_pt2, length, 20, 120, limit, h3, 5, 1, 5);
	draw_XR (ctx, fn_pt2, length, 20, 40, limit, h2, 1, 0.2, 1);
	draw_XR (ctx, fn_pt2, length, 40, 100, limit, h2, 1, 0.5, 1);
	limit = - s . left_extension;
	draw_MLS (ctx, fn_pt2, length, 8, 10, 0.5, limit, h5);
	draw_XL (ctx, fn_pt2, length, 8, 10, limit, h3, 1, 0.5, 1);
	draw_XL (ctx, fn_pt2, length, 8, 10, limit, h2, 0.5, 0.1, 0.5);
};

var draw_LLD3 = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var esc; var limit = 1 + s . right_extension;
	draw_ML (ctx, s . location, length, 1, 9, - s . left_extension, h5);
	draw_MRS (ctx, s . location, length, 10, 50, 10, 1, h5);
	mark (ctx, "100", length * s . location (100), h5);
	mark (ctx, "2", length * s . location (200), h5);
	mark (ctx, "3", length * s . location (300), h5);
	mark (ctx, "4", length * s . location (400), h5);
	mark (ctx, "5", length * s . location (500), h5);
	mark (ctx, "1K", length * s . location (1000), h5);
	mark (ctx, "2", length * s . location (2000), h5);
	mark (ctx, "3", length * s . location (3000), h5);
	mark (ctx, "4", length * s . location (4000), h5);
	mark (ctx, "5", length * s . location (5000), h5);
	mark (ctx, "10K", length * s . location (10000), h5);
	mark (ctx, "2", length * s . location (20000), h5);
	mark (ctx, "3", length * s . location (30000), h5);
	mark (ctx, "4", length * s . location (40000), h5);
	mark (ctx, "5", length * s . location (50000), h5);
	mark (ctx, "100K", length * s . location (100000), h5);
	mark (ctx, "2", length * s . location (200000), h5);
	mark (ctx, "3", length * s . location (300000), h5);
	mark (ctx, "4", length * s . location (400000), h5);
	mark (ctx, "5", length * s . location (500000), h5);
	mark (ctx, "1M", length * s . location (1000000), h5);
	mark (ctx, "2", length * s . location (2000000), h5);
	mark (ctx, "3", length * s . location (3000000), h5);
	mark (ctx, "4", length * s . location (4000000), h5);
	mark (ctx, "5", length * s . location (5000000), h5);
	mark (ctx, "10M", length * s . location (10000000), h5);
	mark (ctx, "2", length * s . location (20000000), h5);
	mark (ctx, "3", length * s . location (30000000), h5);
	mark (ctx, "4", length * s . location (40000000), h5);
	mark (ctx, "100M", length * s . location (100000000), h5);
	mark (ctx, "", length * s . location (200000000), h3);
	mark (ctx, "", length * s . location (250000000), h2);
	mark (ctx, "3", length * s . location (300000000), h5);
	mark (ctx, "", length * s . location (400000000), h2);
	mark (ctx, "5", length * s . location (500000000), h5);
	mark (ctx, "1G", length * s . location (1000000000), h5);
	mark (ctx, "", length * s . location (1500000000), h2);
	mark (ctx, "2", length * s . location (2000000000), h5);
	mark (ctx, "", length * s . location (3000000000), h2);
	mark (ctx, "4", length * s . location (4000000000), h5);
	mark (ctx, "10G", length * s . location (10000000000), h5);
	esc = s . location (20000000000); if (esc <= limit) mark (ctx, "", length * esc, h2);
	esc = s . location (30000000000); if (esc <= limit) mark (ctx, "3", length * esc, h5);
	esc = s . location (40000000000); if (esc <= limit) mark (ctx, "", length * esc, h2);
	esc = s . location (100000000000); if (esc <= limit) mark (ctx, "100G", length * esc, h5);
	esc = s . location (200000000000); if (esc <= limit) mark (ctx, "", length * esc, h2);
	esc = s . location (300000000000); if (esc <= limit) mark (ctx, "", length * esc, h2);
	esc = s . location (400000000000); if (esc <= limit) mark (ctx, "", length * esc, h2);
	esc = s . location (500000000000); if (esc <= limit) mark (ctx, "5", length * esc, h3);
	esc = s . location (1000000000000); if (esc <= limit) mark (ctx, "1T", length * esc, h5);
	draw_XL (ctx, s . location, length, 3, 6, - s . left_extension, h4, 1, 0.5, 1);
	draw_XL (ctx, s . location, length, 3, 6, - s . left_extension, h3, 0.5, 0.1, 0.5);
	draw_XL (ctx, s . location, length, 3, 6, - s . left_extension, h2, 0.1, 0.05, 0.1);
	draw_XL (ctx, s . location, length, 6, 10, - s . left_extension, h3, 1, 0.5, 1);
	draw_XL (ctx, s . location, length, 6, 10, - s . left_extension, h2, 0.5, 0.1, 0.5);
	draw_XR (ctx, s . location, length, 10, 30, limit, h4, 10, 5, 10);
	draw_XR (ctx, s . location, length, 10, 30, limit, h3, 5, 1, 5);
	draw_XR (ctx, s . location, length, 10, 30, limit, h2, 1, 0.5, 1);
	draw_XR (ctx, s . location, length, 30, 50, limit, h3, 10, 5, 10);
	draw_XR (ctx, s . location, length, 30, 50, limit, h2, 5, 1, 5);
	draw_XR (ctx, s . location, length, 50, 100, limit, h3, 50, 10, 50);
	draw_XR (ctx, s . location, length, 50, 100, limit, h2, 10, 2, 10);
	draw_XR (ctx, s . location, length, 100, 400, limit, h3, 100, 50, 100);
	draw_XR (ctx, s . location, length, 100, 400, limit, h2, 50, 10, 50);
	draw_XR (ctx, s . location, length, 400, 500, limit, h2, 100, 20, 100);
	draw_XR (ctx, s . location, length, 500, 1000, limit, h3, 500, 100, 500);
	draw_XR (ctx, s . location, length, 500, 1000, limit, h2, 100, 50, 100);
	draw_XR (ctx, s . location, length, 1000, 3000, limit, h3, 1000, 500, 1000);
	draw_XR (ctx, s . location, length, 1000, 3000, limit, h2, 500, 100, 500);
	draw_XR (ctx, s . location, length, 3000, 5000, limit, h2, 1000, 200, 1000);
	draw_XR (ctx, s . location, length, 5000, 10000, limit, h3, 5000, 1000, 5000);
	draw_XR (ctx, s . location, length, 5000, 10000, limit, h2, 1000, 500, 1000);
	draw_XR (ctx, s . location, length, 10000, 20000, limit, h3, 10000, 5000, 10000);
	draw_XR (ctx, s . location, length, 10000, 20000, limit, h2, 5000, 1000, 5000);
	draw_XR (ctx, s . location, length, 20000, 50000, limit, h2, 10000, 2000, 10000);
	draw_XR (ctx, s . location, length, 50000, 100000, limit, h3, 50000, 10000, 50000);
	draw_XR (ctx, s . location, length, 50000, 100000, limit, h2, 10000, 5000, 10000);
	draw_XR (ctx, s . location, length, 100000, 200000, limit, h3, 100000, 50000, 100000);
	draw_XR (ctx, s . location, length, 100000, 200000, limit, h2, 50000, 10000, 50000);
	draw_XR (ctx, s . location, length, 200000, 300000, limit, h2, 100000, 20000, 100000);
	draw_XR (ctx, s . location, length, 300000, 500000, limit, h2, 100000, 50000, 100000);
	draw_XR (ctx, s . location, length, 500000, 1000000, limit, h3, 500000, 100000, 500000);
	draw_XR (ctx, s . location, length, 500000, 1000000, limit, h2, 100000, 50000, 100000);
	draw_XR (ctx, s . location, length, 1000000, 2000000, limit, h3, 1000000, 500000, 1000000);
	draw_XR (ctx, s . location, length, 1000000, 2000000, limit, h2, 500000, 100000, 500000);
	draw_XR (ctx, s . location, length, 2000000, 3000000, limit, h2, 1000000, 200000, 1000000);
	draw_XR (ctx, s . location, length, 3000000, 5000000, limit, h2, 1000000, 500000, 1000000);
	draw_XR (ctx, s . location, length, 5000000, 10000000, limit, h2, 5000000, 1000000, 5000000);
	draw_XR (ctx, s . location, length, 10000000, 20000000, limit, h2, 10000000, 2000000, 10000000);
	draw_XR (ctx, s . location, length, 20000000, 40000000, limit, h2, 10000000, 5000000, 10000000);
	draw_XR (ctx, s . location, length, 40000000, 100000000, limit, h2, 20000000, 10000000, 30000000);
	draw_XR (ctx, s . location, length, 100000000, 200000000, limit, h2, 100000000, 20000000, 100000000);
	draw_XR (ctx, s . location, length, 500000000, 1000000000, limit, h2, 500000000, 100000000, 500000000);
	draw_XR (ctx, s . location, length, 4000000000, 10000000000, limit, h2, 2000000000, 1000000000, 3000000000);
	draw_XR (ctx, s . location, length, 40000000000, 100000000000, 1 + s . right_extension, h2, 20000000000, 10000000000, 30000000000);
};

var draw_LLD2 = function (ctx, length, height, s) {
	var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
	draw_XR (ctx, s . location, length, 3, 6, limit, h4, 1, 0.5, 1);
	draw_XR (ctx, s . location, length, 3, 6, limit, h3, 0.5, 0.1, 0.5);
	draw_XR (ctx, s . location, length, 3, 6, limit, h2, 0.1, 0.05, 0.1);
	draw_XR (ctx, s . location, length, 6, 10, limit, h3, 1, 0.5, 1);
	draw_XR (ctx, s . location, length, 6, 10, limit, h2, 0.5, 0.1, 0.5);
	draw_XR (ctx, s . location, length, 10, 20, limit, h3, 2, 1, 2);
	draw_XR (ctx, s . location, length, 10, 20, limit, h2, 1, 0.5, 1);
	draw_MRS (ctx, s . location, length, 2, 3, 0.5, limit, h5);
	draw_MRS (ctx, s . location, length, 3, 10, 1, limit, h5);
	draw_MRS (ctx, s . location, length, 10, 20, 2, limit, h5);
	draw_XR (ctx, s . location, length, 2, 2.5, limit, h4, 0.5, 0.1, 0.5);
	draw_XR (ctx, s . location, length, 2.5, 3, limit, h3, 0.5, 0.1, 0.5);
	draw_XR (ctx, s . location, length, 2.5, 3, limit, h2, 0.1, 0.02, 0.1);
	draw_XR (ctx, s . location, length, 1.5, 2.5, limit, h3, 0.1, 0.05, 0.1);
	draw_XR (ctx, s . location, length, 1.8, 2.5, limit, h2, 0.05, 0.01, 0.05);
	draw_XR (ctx, s . location, length, 1.4, 1.8, limit, h3, 0.05, 0.01, 0.05);
	draw_XR (ctx, s . location, length, 1.4, 1.8, limit, h2, 0.01, 0.005, 0.01);
	limit = - s . left_extension;
	draw_XL (ctx, s . location, length, 1.2, 1.4, limit, h3, 0.05, 0.01, 0.05);
	draw_XL (ctx, s . location, length, 1.2, 1.4, limit, h2, 0.01, 0.002, 0.01);
	draw_MLSF (ctx, s . location, length, 1.25, 1.45, 0.05, 2, limit, h5);
	draw_MLS (ctx, s . location, length, 1.5, 1.9, 0.1, limit, h5);
	smark (ctx, "e", Math . log10 ( Math . log10 (Math . E) * 10) * length, h3, h5);
	smark (ctx, "\u03c0", Math . log10 ( Math . log10 (Math . PI) * 10) * length, h3, h5);
};

var draw_LLD1 = function (ctx, length, height, s) {
	var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
	draw_MRSF (ctx, s . location, length, 1.1, 1.4, 0.02, 2, limit, h5);
	draw_XR (ctx, s . location, length, 1.1, 1.2, limit, h4, 0.02, 0.01, 0.02);
	draw_XR (ctx, s . location, length, 1.1, 1.2, limit, h3, 0.01, 0.005, 0.01);
	draw_XR (ctx, s . location, length, 1.1, 1.2, limit, h2, 0.005, 0.001, 0.005);
	draw_XR (ctx, s . location, length, 1.2, 1.4, limit, h3, 0.02, 0.01, 0.02);
	draw_XR (ctx, s . location, length, 1.2, 1.4, limit, h2, 0.01, 0.002, 0.01);
	draw_MRSF (ctx, s . location, length, 1.025, 1.05, 0.005, 3, limit, h5);
	draw_MRS (ctx, s . location, length, 1.06, 1.09, 0.01, limit, h5);
	draw_XR (ctx, s . location, length, 1.025, 1.1, limit, h3, 0.005, 0.001, 0.005);
	draw_XR (ctx, s . location, length, 1.05, 1.1, limit, h4, 0.01, 0.005, 0.01);
	draw_XR (ctx, s . location, length, 1.05, 1.1, limit, h2, 0.001, 0.0005, 0.001);
	draw_XR (ctx, s . location, length, 1.025, 1.05, limit, h2, 0.001, 0.0002, 0.001);
	limit = - s . left_extension;
	draw_MLSF (ctx, s . location, length, 1.002, 1.025, 0.002, 3, limit, h5);
//	draw_XL (ctx, s . location, length, 1, 1.025, limit, h4, 0.002, 0.001, 0.002);
	draw_XL (ctx, s . location, length, 1, 1.025, limit, h3, 0.002, 0.001, 0.002);
	draw_XL (ctx, s . location, length, 1, 1.025, limit, h2, 0.001, 0.0002, 0.001);
};

var draw_LLD0 = function (ctx, length, height, s) {
	var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
	draw_MRSF (ctx, s . location, length, 1.001, 1.002, 0.001, 3, limit, h5);
	draw_XR (ctx, s . location, length, 1.01, 1.1, limit, h3, 0.001, 0.0005, 0.001);
	draw_XR (ctx, s . location, length, 1.01, 1.1, limit, h2, 0.0005, 0.0001, 0.0005);
	draw_MRSF (ctx, s . location, length, 1.0025, 1.005, 0.0005, 4, limit, h5);
	draw_MRS (ctx, s . location, length, 1.006, 1.01, 0.001, limit, h5);
	draw_MRS (ctx, s . location, length, 1.01, 1.1, 0.002, limit, h5);
	draw_XR (ctx, s . location, length, 1.002, 1.01, limit, h3, 0.0005, 0.0001, 0.0005);
	draw_XR (ctx, s . location, length, 1.005, 1.01, limit, h4, 0.001, 0.0005, 0.001);
	draw_XR (ctx, s . location, length, 1.01, 1.1, limit, h4, 0.002, 0.001, 0.002);
	draw_XR (ctx, s . location, length, 1.005, 1.01, limit, h2, 0.0001, 0.00005, 0.0001);
	draw_XR (ctx, s . location, length, 1.002, 1.005, limit, h2, 0.0001, 0.00002, 0.0001);
	limit = - s . left_extension;
	draw_MLSF (ctx, s . location, length, 1.0012, 1.0018, 0.0002, 4, limit, h5);
    draw_XL (ctx, s . location, length, 1, 1.001, limit, h5, 0.001, 0.0001, 0.001);
	draw_XL (ctx, s . location, length, 1, 1.002, limit, h4, 0.0002, 0.0001, 0.0002);
	draw_XL (ctx, s . location, length, 1, 1.002, limit, h3, 0.0001, 0.00005, 0.0001);
	draw_XL (ctx, s . location, length, 1, 1.002, limit, h2, 0.00005, 0.00001, 0.00005);
};

var draw_LLD03 = function (ctx, length, height, s) {
	var limit = - s . left_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_XLI (ctx, s . location, length, 0.2, 0.1, limit, h3, 0.1, 0.01, 0.1);
  draw_XLI (ctx, s . location, length, 0.2, 0.1, limit, h2, 0.1, 0.002, 0.1);
  var location = s . location (0.15); if (location > limit) mark (ctx, ".15", length * s . location (0.15), h5);
  location = s . location (0.12); if (location > limit) mark (ctx, ".12", length * s . location (0.12), h5);
  mark (ctx, ".1", length * s . location (0.1), h5);
  mark (ctx, ".05", length * s . location (0.05), h5);
  mark (ctx, ".02", length * s . location (0.02), h5);
  mark (ctx, "", length * s . location (0.015), h3);
  draw_XLI (ctx, s . location, length, 0.1, 0.05, limit, h3, 0.05, 0.01, 0.05);
  draw_XLI (ctx, s . location, length, 0.05, 0.02, limit, h3, 0.03, 0.01, 0.03);
  draw_XLI (ctx, s . location, length, 0.1, 0.02, limit, h2, 0.01, 0.002, 0.01);
  draw_XLI (ctx, s . location, length, 0.02, 0.01, limit, h2, 0.01, 0.001, 0.01);
  mark (ctx, ".01", length * s . location (0.01), h5);
  mark (ctx, ".005", length * s . location (0.005), h5);
  mark (ctx, ".002", length * s . location (0.002), h5);
  draw_XLI (ctx, s . location, length, 0.01, 0.005, limit, h3, 0.005, 0.001, 0.005);
  draw_XLI (ctx, s . location, length, 0.005, 0.002, limit, h3, 0.003, 0.001, 0.003);
  draw_XLI (ctx, s . location, length, 0.01, 0.001, limit, h2, 0.001, 0.0002, 0.001);
  mark (ctx, "10\u207b\u00b3", length * s . location (0.001), h5);
  mark (ctx, "5", length * s . location (0.0005), h5);
  mark (ctx, "2", length * s . location (0.0002), h5);
  draw_XLI (ctx, s . location, length, 0.001, 0.0005, limit, h3, 0.0005, 0.0001, 0.0005);
  draw_XLI (ctx, s . location, length, 0.0005, 0.0002, limit, h3, 0.0003, 0.0001, 0.0003);
  draw_XLI (ctx, s . location, length, 0.001, 0.0005, limit, h2, 0.0001, 0.00005, 0.0001);
  draw_XLI (ctx, s . location, length, 0.0005, 0.0001, limit, h2, 0.0001, 0.00002, 0.0001);
  mark (ctx, "10\u207b\u2074", length * s . location (0.0001), h5);
  limit = 1 + s . right_extension;
  mark (ctx, "5", length * s . location (0.00005), h5);
  location = s . location (0.00002); if (location < limit) mark (ctx, "2", length * location, h5);
  draw_XRI (ctx, s . location, length, 0.0001, 0.00005, limit, h3, 0.00005, 0.00001, 0.00005);
  draw_XRI (ctx, s . location, length, 0.00005, 0.00002, limit, h3, 0.00003, 0.00001, 0.00003);
  draw_XRI (ctx, s . location, length, 0.0001, 0.00002, limit, h2, 0.00001, 0.000005, 0.00001);
  draw_XRI (ctx, s . location, length, 0.00002, 0.00001, limit, h2, 0.00001, 0.000002, 0.000009);
  location = s . location (0.00001); if (location < limit) mark (ctx, "10\u207b\u2075", length * location, h5);
  location = s . location (0.000005); if (location < limit) mark (ctx, "5", length * location, h5);
  draw_XRI (ctx, s . location, length, 0.00001, 0.000005, limit, h2, 0.000005, 0.000001, 0.000005);
  draw_XRI (ctx, s . location, length, 0.000005, 0.000002, limit, h3, 0.000003, 0.000001, 0.000003);
  draw_XRI (ctx, s . location, length, 0.000005, 0.000002, limit, h2, 0.000001, 0.0000005, 0.000001);
  draw_XRI (ctx, s . location, length, 0.000002, 0.000001, limit, h2, 0.000001, 0.0000002, 0.000001);
  location = s . location (0.000002); if (location < limit) mark (ctx, "2", length * location, h5);
  location = s . location (0.000001); if (location < limit) mark (ctx, "10\u207b\u2076", length * location, h5);
  location = s . location (0.0000005); if (location < limit) mark (ctx, "5", length * location, h5);
  draw_XRI (ctx, s . location, length, 0.000001, 0.0000005, limit, h2, 0.0000005, 0.0000001, 0.0000005);
  draw_XRI (ctx, s . location, length, 0.0000005, 0.0000002, limit, h3, 0.0000003, 0.0000001, 0.0000003);
  draw_XRI (ctx, s . location, length, 0.0000005, 0.0000002, limit, h2, 0.0000001, 0.00000005, 0.0000001);
  draw_XRI (ctx, s . location, length, 0.0000002, 0.0000001, limit, h2, 0.0000001, 0.00000002, 0.0000001);
  location = s . location (0.0000002); if (location < limit) mark (ctx, "2", length * location, h5);
  location = s . location (0.0000001); if (location < limit) mark (ctx, "10\u207b\u2077", length * location, h5);
  location = s . location (0.00000005); if (location < limit) mark (ctx, "5", length * location, h5);
  draw_XRI (ctx, s . location, length, 0.0000001, 0.00000005, limit, h2, 0.00000005, 0.00000001, 0.00000005);
  draw_XRI (ctx, s . location, length, 0.00000005, 0.00000002, limit, h3, 0.00000003, 0.00000001, 0.00000003);
  draw_XRI (ctx, s . location, length, 0.00000005, 0.00000002, limit, h2, 0.00000001, 0.000000005, 0.00000001);
  draw_XRI (ctx, s . location, length, 0.00000002, 0.00000001, limit, h2, 0.00000001, 0.000000002, 0.00000001);
  location = s . location (0.00000002); if (location < limit) mark (ctx, "2", length * location, h5);
  location = s . location (0.00000001); if (location < limit) mark (ctx, "10\u207b\u2078", length * location, h5);
  location = s . location (0.000000005); if (location < limit) mark (ctx, "5", length * location, h5);
  draw_XRI (ctx, s . location, length, 0.00000001, 0.000000005, limit, h2, 0.000000005, 0.000000001, 0.000000005);
  draw_XRI (ctx, s . location, length, 0.000000005, 0.000000002, limit, h2, 0.000000003, 0.000000001, 0.000000003);
  location = s . location (0.000000002); if (location < limit) mark (ctx, "2", length * location, h5);
  location = s . location (0.000000001); if (location < limit) mark (ctx, "10\u207b\u2079", length * location, h5);
  location = s . location (0.0000000005); if (location < limit) mark (ctx, "", length * location, h2);
  location = s . location (0.0000000002); if (location < limit) mark (ctx, "", length * location, h2);
  location = s . location (0.0000000001); if (location < limit) mark (ctx, "10\u207b\u00b9\u2070", length * location, h5);
  location = s . location (0.00000000005); if (location < limit) mark (ctx, "", length * location, h2);
  location = s . location (0.00000000002); if (location < limit) mark (ctx, "", length * location, h2);
  location = s . location (0.00000000001); if (location < limit) mark (ctx, "10\u207b\u00b9\u00b9", length * location, h5);
};

var draw_LLD02 = function (ctx, length, height, s) {
	var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_MRSI (ctx, s . location, length, 0.75, 0.1, 0.05, limit, h5);
  draw_MRSI (ctx, s . location, length, 0.1, 0.06, 0.02, limit, h5);
  draw_XRI (ctx, s . location, length, 0.8, 0.06, limit, h3, 0.05, 0.01, 0.05);
  draw_XRI (ctx, s . location, length, 0.8, 0.06, limit, h2, 0.01, 0.002, 0.01);
  limit = - s . left_extension;
  draw_MLSI (ctx, s . location, length, 0.9, 0.75, 0.05, limit, h5);
  draw_XLI (ctx, s . location, length, 0.9, 0.8, limit, h4, 0.05, 0.01, 0.05);
  draw_XLI (ctx, s . location, length, 0.9, 0.8, limit, h3, 0.01, 0.005, 0.01);
  draw_XLI (ctx, s . location, length, 0.9, 0.8, limit, h2, 0.005, 0.001, 0.005);
};

var draw_LLD01 = function (ctx, length, height, s) {
	var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_MRSI (ctx, s . location, length, 0.96, 0.8, 0.01, limit, h5);
  draw_MRSI (ctx, s . location, length, 0.8, 0.76, 0.02, limit, h5);
  draw_XRI (ctx, s . location, length, 0.8, 0.76, limit, h4, 0.02, 0.01, 0.02);
  draw_XRI (ctx, s . location, length, 0.9, 0.76, limit, h3, 0.01, 0.005, 0.01);
  draw_XRI (ctx, s . location, length, 0.9, 0.76, limit, h2, 0.005, 0.001, 0.005);
  draw_XRI (ctx, s . location, length, 0.95, 0.9, limit, h4, 0.01, 0.005, 0.01);
  draw_XRI (ctx, s . location, length, 0.95, 0.9, limit, h3, 0.005, 0.001, 0.005);
  draw_XRI (ctx, s . location, length, 0.95, 0.9, limit, h2, 0.001, 0.0005, 0.001);
  draw_XRI (ctx, s . location, length, 0.97, 0.95, limit, h4, 0.01, 0.005, 0.01);
  draw_XRI (ctx, s . location, length, 0.98, 0.95, limit, h3, 0.005, 0.001, 0.005);
  draw_XRI (ctx, s . location, length, 0.98, 0.95, limit, h2, 0.001, 0.0002, 0.001);
  limit = - s . left_extension;
  draw_MLSI (ctx, s . location, length, 0.99, 0.97, 0.005, limit, h5);
  draw_XLI (ctx, s . location, length, 0.99, 0.98, limit, h4, 0.005, 0.001, 0.005);
  draw_XLI (ctx, s . location, length, 0.99, 0.98, limit, h3, 0.001, 0.0005, 0.001);
  draw_XLI (ctx, s . location, length, 0.99, 0.98, limit, h2, 0.0005, 0.0001, 0.0005);
  draw_MLSI (ctx, s . location, length, 0.999, 0.991, 0.001, limit, h5);
  draw_XLI (ctx, s . location, length, 0.999, 0.99, limit, h4, 0.001, 0.0005, 0.001);
  draw_XLI (ctx, s . location, length, 0.999, 0.99, limit, h3, 0.0005, 0.0001, 0.0005);
  draw_XLI (ctx, s . location, length, 0.999, 0.99, limit, h2, 0.0001, 0.00005, 0.0001);
};

var draw_LLD00 = function (ctx, length, height, s) {
	var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_MRSI (ctx, s . location, length, 0.999, 0.986, 0.001, limit, h5);
  draw_MRSI (ctx, s . location, length, 0.986, 0.96, 0.002, limit, h5);
  draw_XRI (ctx, s . location, length, 0.99, 0.96, limit, h4, 0.002, 0.001, 0.002);
  draw_XRI (ctx, s . location, length, 0.99, 0.96, limit, h3, 0.001, 0.0005, 0.001);
  draw_XRI (ctx, s . location, length, 0.99, 0.96, limit, h2, 0.0005, 0.0001, 0.0005);
  draw_XRI (ctx, s . location, length, 0.998, 0.99, limit, h4, 0.001, 0.0005, 0.001);
  draw_XRI (ctx, s . location, length, 0.998, 0.99, limit, h3, 0.0005, 0.0001, 0.0005);
  draw_XRI (ctx, s . location, length, 0.996, 0.99, limit, h2, 0.0001, 0.00005, 0.0001);
  draw_XRI (ctx, s . location, length, 0.998, 0.996, limit, h2, 0.0001, 0.00002, 0.0001);
  draw_XLI (ctx, s . location, length, 0.999, 0.998, - s . left_extension, h4, 0.0005, 0.0001, 0.0005);
  draw_XLI (ctx, s . location, length, 1, 0.998, - s . left_extension, h3, 0.0001, 0.00005, 0.0001);
  draw_XLI (ctx, s . location, length, 1, 0.998, - s . left_extension, h2, 0.00005, 0.00001, 0.00005);
};

var draw_Cent3 = function (ctx, length, height, s) {
    var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_MRS (ctx, s . location, length, 800, 1000, 100, limit, h5);
  draw_MRS (ctx, s . location, length, 1000, 2000, 200, limit, h5);
  draw_MRS (ctx, s . location, length, 2000, 5000, 500, limit, h5);
  draw_MRS (ctx, s . location, length, 5000, 12000, 1000, limit, h5);
  draw_XR (ctx, s . location, length, 800, 1000, limit, h3, 100, 50, 100);
  draw_XR (ctx, s . location, length, 800, 1000, limit, h2, 50, 10, 50);
  draw_XR (ctx, s . location, length, 1000, 2000, limit, h3, 200, 100, 200);
  draw_XR (ctx, s . location, length, 1000, 2000, limit, h2, 100, 20, 100);  
  draw_XR (ctx, s . location, length, 2000, 4000, limit, h3, 500, 100, 500);
  draw_XR (ctx, s . location, length, 2000, 4000, limit, h2, 100, 20, 100);
  draw_XR (ctx, s . location, length, 4000, 12000, limit, h4, 1000, 500, 1000);
  draw_XR (ctx, s . location, length, 4000, 12000, limit, h3, 500, 100, 500);
  draw_XR (ctx, s . location, length, 4000, 12000, limit, h2, 100, 50, 100);
  limit = - s . left_extension;
  draw_MLS (ctx, s . location, length, 500, 800, 100, limit, h5);
  draw_XL (ctx, s . location, length, 500, 800, limit, h3, 100, 50, 100);
  draw_XL (ctx, s . location, length, 500, 800, limit, h2, 50, 10, 50);
};
var draw_Cent2 = function (ctx, length, height, s) {
    var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_MRS (ctx, s . location, length, -160, 0, 20, limit, h5);
  draw_MRS (ctx, s . location, length, 0, 200, 50, limit, h5);
  draw_MRS (ctx, s . location, length, 200, 1000, 100, limit, h5);
  draw_XR (ctx, s . location, length, -160, 0, limit, h3, 20, 10, 20);
  draw_XR (ctx, s . location, length, -160, 0, limit, h2, 10, 2, 10);
  draw_XR (ctx, s . location, length, 0, 200, limit, h3, 100, 10, 100);
  draw_XR (ctx, s . location, length, 0, 200, limit, h2, 10, 5, 10);
  draw_XR (ctx, s . location, length, 200, 1000, limit, h3, 100, 50, 100);
  draw_XR (ctx, s . location, length, 200, 1000, limit, h2, 50, 10, 50);
  limit = - s . left_extension;
  draw_MLS (ctx, s . location, length, -200, -160, 20, limit, h5);
  draw_XL (ctx, s . location, length, -200, -160, limit, h3, 20, 10, 20);
  draw_XL (ctx, s . location, length, -200, -160, limit, h2, 10, 2, 10);
};
var draw_Cent1 = function (ctx, length, height, s) {
    var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_MRS (ctx, s . location, length, -220, -140, 10, limit, h5);
  draw_MRS (ctx, s . location, length, -260, -220, 5, limit, h5);
  draw_XR (ctx, s . location, length, -220, -160, limit, h3, 10, 5, 10);
  draw_XR (ctx, s . location, length, -220, -160, limit, h2, 5, 1, 5);
  draw_XR (ctx, s . location, length, -260, -220, limit, h3, 5, 1, 5);
  draw_XR (ctx, s . location, length, -250, -220, limit, h2, 1, 0.5, 1);
  draw_XR (ctx, s . location, length, -260, -250, limit, h2, 1, 0.2, 1);
  limit = - s . left_extension;
  draw_MLS (ctx, s . location, length, -270, -260, 2, limit, h5);
  draw_XL (ctx, s . location, length, -270, -260, limit, h3, 5, 1, 5);
  draw_XL (ctx, s . location, length, -270, -260, limit, h2, 1, 0.2, 1);
};
var draw_Cent0 = function (ctx, length, height, s) {
    var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_MRS (ctx, s . location, length, -271, -260, 1, limit, h5);
  draw_MRS (ctx, s . location, length, -272, -271, 0.2, limit, h5);
  draw_XR (ctx, s . location, length, -268, -260, limit, h3, 1, 0.5, 1);
  draw_XR (ctx, s . location, length, -268, -260, limit, h2, 0.5, 0.1, 0.5);
  draw_XR (ctx, s . location, length, -271, -268, limit, h4, 1, 0.5, 1);
  draw_XR (ctx, s . location, length, -271, -268, limit, h3, 0.5, 0.1, 0.5);
  draw_XR (ctx, s . location, length, -271, -268, limit, h2, 0.1, 0.05, 0.1);
  draw_XR (ctx, s . location, length, -272, -271, limit, h3, 0.2, 0.1, 0.2);
  draw_XR (ctx, s . location, length, -272, -271, limit, h2, 0.1, 0.02, 0.1);
  limit = - s . left_extension;
  draw_MLS (ctx, s . location, length, -273, -272, 0.1, limit, h5);
  draw_XL (ctx, s . location, length, -273, -272, limit, h3, 0.1, 0.05, 0.1);
  draw_XL (ctx, s . location, length, -273, -272, limit, h2, 0.05, 0.01, 0.05);
};

var draw_Fahr3 = function (ctx, length, height, s) {
    var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
//  draw_MRS (ctx, s . location, length, 800, 1000, 100, limit, h5);
  draw_MRS (ctx, s . location, length, 1400, 2000, 200, limit, h5);
  draw_MRS (ctx, s . location, length, 2000, 5000, 500, limit, h5);
  draw_MRS (ctx, s . location, length, 5000, 10000, 1000, limit, h5);
  draw_MRS (ctx, s . location, length, 10000, 20000, 2000, limit, h5);
//  draw_XR (ctx, s . location, length, 800, 1000, limit, h3, 100, 50, 100);
//  draw_XR (ctx, s . location, length, 800, 1000, limit, h2, 50, 10, 50);
  draw_XR (ctx, s . location, length, 1400, 2000, limit, h3, 200, 100, 200);
  draw_XR (ctx, s . location, length, 1400, 2000, limit, h2, 100, 20, 100);  
  draw_XR (ctx, s . location, length, 2000, 4000, limit, h3, 500, 100, 500);
  draw_XR (ctx, s . location, length, 2000, 4000, limit, h2, 100, 20, 100);
  draw_XR (ctx, s . location, length, 4000, 10000, limit, h4, 1000, 500, 1000);
  draw_XR (ctx, s . location, length, 4000, 10000, limit, h3, 500, 100, 500);
  draw_XR (ctx, s . location, length, 4000, 10000, limit, h2, 100, 50, 100);
  draw_XR (ctx, s . location, length, 10000, 20000, limit, h4, 2000, 1000, 2000);
  draw_XR (ctx, s . location, length, 10000, 20000, limit, h3, 1000, 500, 1000);
  draw_XR (ctx, s . location, length, 10000, 20000, limit, h2, 500, 100, 500);
  limit = - s . left_extension;
  draw_MLS (ctx, s . location, length, 800, 1400, 200, limit, h5);
  draw_XL (ctx, s . location, length, 800, 1400, limit, h3, 200, 100, 200);
  draw_XL (ctx, s . location, length, 800, 1400, limit, h2, 100, 20, 100);
};
var draw_Fahr2 = function (ctx, length, height, s) {
    var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_MRS (ctx, s . location, length, -260, 0, 20, limit, h5);
  draw_MRS (ctx, s . location, length, 0, 200, 50, limit, h5);
  draw_MRS (ctx, s . location, length, 200, 1000, 100, limit, h5);
  draw_MRS (ctx, s . location, length, 1000, 2000, 200, limit, h5);
  draw_XR (ctx, s . location, length, -260, 0, limit, h3, 20, 10, 20);
  draw_XR (ctx, s . location, length, -260, 0, limit, h2, 10, 2, 10);
  draw_XR (ctx, s . location, length, 0, 200, limit, h3, 100, 10, 100);
  draw_XR (ctx, s . location, length, 0, 200, limit, h2, 10, 5, 10);
  draw_XR (ctx, s . location, length, 200, 1000, limit, h3, 100, 50, 100);
  draw_XR (ctx, s . location, length, 200, 1000, limit, h2, 50, 10, 50);
  draw_XR (ctx, s . location, length, 1000, 2000, limit, h3, 200, 100, 200);
  draw_XR (ctx, s . location, length, 1000, 2000, limit, h2, 100, 20, 100);
  limit = - s . left_extension;
  draw_MLS (ctx, s . location, length, -400, -260, 20, limit, h5);
  draw_XL (ctx, s . location, length, -400, -260, limit, h3, 20, 10, 20);
  draw_XL (ctx, s . location, length, -400, -260, limit, h2, 10, 2, 10);
};
var draw_Fahr1 = function (ctx, length, height, s) {
    var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_MRS (ctx, s . location, length, -300, -240, 20, limit, h5);
  draw_MRS (ctx, s . location, length, -400, -300, 10, limit, h5);
  draw_MRS (ctx, s . location, length, -440, -400, 5, limit, h5);
  draw_XR (ctx, s . location, length, -300, -240, limit, h3, 20, 10, 20);
  draw_XR (ctx, s . location, length, -300, -240, limit, h2, 10, 2, 10);
  draw_XR (ctx, s . location, length, -400, -300, limit, h3, 10, 5, 10);
  draw_XR (ctx, s . location, length, -400, -300, limit, h2, 5, 1, 5);
  draw_XR (ctx, s . location, length, -440, -400, limit, h3, 5, 1, 5);
  draw_XR (ctx, s . location, length, -430, -400, limit, h2, 1, 0.5, 1);
  draw_XR (ctx, s . location, length, -440, -430, limit, h2, 1, 0.2, 1);
  limit = - s . left_extension;
  draw_MLS (ctx, s . location, length, -460, -440, 5, limit, h5);
  draw_XL (ctx, s . location, length, -460, -440, limit, h3, 5, 1, 5);
  draw_XL (ctx, s . location, length, -460, -440, limit, h2, 1, 0.2, 1);
};
var draw_Fahr0 = function (ctx, length, height, s) {
    var limit = 1 + s . right_extension;
	var h5 = height * 0.5; var h2 = height * 0.2; var h3 = height * 0.3; var h4 = height * 0.4;
  draw_MRS (ctx, s . location, length, -450, -400, 2, limit, h5);
  draw_MRS (ctx, s . location, length, -455, -450, 1, limit, h5);
  draw_MRS (ctx, s . location, length, -457, -455, 0.5, limit, h5);
  draw_MRS (ctx, s . location, length, -457.8, -457, 0.2, limit, h5);
  draw_XR (ctx, s . location, length, -450, -400, limit, h3, 2, 1, 2);
  draw_XR (ctx, s . location, length, -450, -400, limit, h2, 1, 0.2, 1);
  draw_XR (ctx, s . location, length, -455, -450, limit, h3, 1, 0.5, 1);
  draw_XR (ctx, s . location, length, -455, -450, limit, h2, 0.5, 0.1, 0.5);
  draw_XR (ctx, s . location, length, -457, -455, limit, h3, 0.5, 0.1, 0.5);
  draw_XR (ctx, s . location, length, -457, -455, limit, h2, 0.1, 0.05, 0.1);
  draw_XR (ctx, s . location, length, -457.8, -457, limit, h3, 0.2, 0.1, 0.5);
  draw_XR (ctx, s . location, length, -457.8, -457, limit, h2, 0.1, 0.02, 0.1);
  limit = - s . left_extension;
  draw_MLS (ctx, s . location, length, -459, -457.8, 0.2, limit, h5);
  draw_XL (ctx, s . location, length, -459, -457.8, limit, h3, 0.2, 0.1, 0.5);
  draw_XL (ctx, s . location, length, -459, -457.8, limit, h2, 0.1, 0.02, 0.1);
};

var draw_sinhrad = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var limit = 1 + s . right_extension;
	draw_MRS (ctx, s . location, length, .1, .2, .02, limit, h5);
	draw_MRS (ctx, s . location, length, .2, 1.2, .1, limit, h5);
	draw_XR (ctx, s . location, length, .1, .2, limit, h4, .02, .01, .02);
	draw_XR (ctx, s . location, length, .1, .2, limit, h3, .01, .005, .01);
	draw_XR (ctx, s . location, length, .1, .2, limit, h2, .005, .001, .005);
	draw_XR (ctx, s . location, length, .2, .4, limit, h4, .1, .05, .1);
	draw_XR (ctx, s . location, length, .2, .4, limit, h3, .05, .01, .05);
	draw_XR (ctx, s . location, length, .2, .4, limit, h2, .01, .002, .01);
	draw_XR (ctx, s . location, length, .4, 1.2, limit, h4, .1, .05, .1);
	draw_XR (ctx, s . location, length, .4, 1.2, limit, h3, .05, .01, .05);
	draw_XR (ctx, s . location, length, .4, 1.2, limit, h2, .01, .005, .01);
	limit = - s . left_extension;
	draw_MLS (ctx, s . location, length, .08, .1, .01, limit, h5);
	draw_XL (ctx, s . location, length, .08, .1, limit, h3, .01, .005, .01);
	draw_XL (ctx, s . location, length, .08, .1, limit, h2, .005, .001, .005);
};
var draw_sinh2rad = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var limit = 1 + s . right_extension;
	draw_MRS (ctx, s . location, length, 1, 4, .1, limit, h5);
	draw_XR (ctx, s . location, length, 1, 4, limit, h3, .1, .05, .1);
	draw_XR (ctx, s . location, length, 1, 4, limit, h2, .05, .01, .05);
	limit = - s . left_extension;
	draw_MLS (ctx, s . location, length, .8, 1, .1, limit, h5);
	draw_XL (ctx, s . location, length, .8, 1, limit, h3, .1, .05, .1);
	draw_XL (ctx, s . location, length, .8, 1, limit, h2, .05, .01, .05);
};
var draw_coshrad = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var limit = 1 + s . right_extension;
	draw_MRS (ctx, s . location, length, .4, 3.5, .1, limit, h5);
	draw_XR (ctx, s . location, length, .1, .4, limit, h2, .1, .05, .1);
	draw_XR (ctx, s . location, length, .4, 3.5, limit, h3, .1, .05, .1);
	draw_XR (ctx, s . location, length, .4, 3.5, limit, h2, .05, .01, .05);
	mark (ctx, 0, 0, h5);
	tick (ctx, s . location (.3) * length, h5);
	tick (ctx, s . location (.2) * length, h5);
	tick (ctx, s . location (.1) * length, h5);
};
var draw_tanhrad = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var limit = 1 + s . right_extension;
	draw_MRS (ctx, s . location, length, .12, .2, .02, limit, h5);
	draw_MRS (ctx, s . location, length, .2, 1, .1, limit, h5);
	draw_MRS (ctx, s . location, length, 1, 2, 1, limit, h5);
	draw_XR (ctx, s . location, length, 1, 3, limit, h4, 1, .5, 1);
	draw_XR (ctx, s . location, length, 1, 2, limit, h3, 1, .1, 1);
	draw_XR (ctx, s . location, length, 1, 1.5, limit, h2, .1, .02, .1);
	tick (ctx, s. location (3) * length, h5);
	mark (ctx, "\u221e", length, h5);
	draw_XR (ctx, s . location, length, .5, 1, limit, h3, .1, .05, .1);
	draw_XR (ctx, s . location, length, .5, 1, limit, h2, .05, .01, .05);
	draw_XR (ctx, s . location, length, .2, .5, limit, h4, .1, .05, .1);
	draw_XR (ctx, s . location, length, .2, .5, limit, h3, .05, .01, .05);
	draw_XR (ctx, s . location, length, .2, .5, limit, h2, .01, .005, .01);
	draw_XR (ctx, s . location, length, .12, .2, limit, h3, .02, .01, .02);
	draw_XR (ctx, s . location, length, .12, .2, limit, h2, .01, .002, .01);
	limit = - s . left_extension;
	draw_MLS (ctx, s . location, length, .05, .12, .01, limit, h5);
	draw_XL (ctx, s . location, length, .05, .12, limit, h3, .01, .005, .01);
	draw_XL (ctx, s . location, length, .05, .12, limit, h2, .005, .001, .005);
};
var draw_metric_randl = function (ctx, length, height, scale) {
  var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
  var limit = 1 + scale . right_extension;
  var high_value = scale . step * 100;
  draw_MRS (ctx, scale . location, length, 0, high_value, scale . step, limit, h5);
  if (length * (scale . location (scale . step) - scale . location (0)) > 55) {
		draw_XR (ctx, scale . location, length, 0, high_value, limit, h4, scale . step, scale . step * 0.5, scale . step);
		draw_XR (ctx, scale . location, length, 0, high_value, limit, h3, scale . step * 0.5, scale . step * 0.1, scale . step * 0.5);
		draw_XR (ctx, scale . location, length, 0, high_value, limit, h2, scale . step * 0.1, scale . step * 0.05, scale . step * 0.1);
  } else {
		draw_XR (ctx, scale . location, length, 0, high_value, limit, h3, scale . step, scale . step * 0.5, scale . step);
		draw_XR (ctx, scale . location, length, 0, high_value, limit, h2, scale . step * 0.5, scale . step * 0.1, scale . step * 0.5);
  }
  limit = - scale . left_extension;
  var low_value = - scale . step * 10;
  draw_MLS (ctx, scale . location, length, low_value, 0, scale . step, limit, h5);
  if (length * (scale . location (scale . step) - scale . location (0)) > 55) {
		draw_XL (ctx, scale . location, length, low_value, 0, limit, h4, scale . step, scale . step * 0.5, scale . step);
		draw_XL (ctx, scale . location, length, low_value, 0, limit, h3, scale . step * 0.5, scale . step * 0.1, scale . step * 0.5);
		draw_XL (ctx, scale . location, length, low_value, 0, limit, h2, scale . step * 0.1, scale . step * 0.05, scale . step * 0.1);
  } else {
		draw_XL (ctx, scale . location, length, low_value, 0, limit, h3, scale . step, scale . step * 0.5, scale . step);
		draw_XL (ctx, scale . location, length, low_value, 0, limit, h2, scale . step * 0.5, scale . step * 0.1, scale . step * 0.5);
  }
};
var draw_htone = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var limit = 1 + s . right_extension;
	var loc = 0;
	for (var octave = 0.0; octave < 4; octave++) {
		loc = s . location (octave); if (loc < limit) {mark (ctx, "C" + octave, length * loc, h5)};
		loc = s . location (octave + 1 / 12); if (loc < limit) {mark (ctx, "", length * loc , h3)};
		loc = s . location (octave + 1 / 6); if (loc < limit) {mark (ctx, "D", length * loc , h3)};
		loc = s . location (octave + 1 / 4); if (loc < limit) {mark (ctx, "", length * loc , h3)};
		loc = s . location (octave + 1 / 3); if (loc < limit) {mark (ctx, "E", length * loc , h3)};
		loc = s . location (octave + 5 / 12); if (loc < limit) {mark (ctx, "F", length * loc , h3)};
		loc = s . location (octave + 1 / 2); if (loc < limit) {mark (ctx, "", length * loc , h3)};
		loc = s . location (octave + 7 / 12); if (loc < limit) {mark (ctx, "G", length * loc, h3)};
		loc = s . location (octave + 2 / 3); if (loc < limit) {mark (ctx, "", length * loc , h3)};
		loc = s . location (octave + 3 / 4); if (loc < limit) {mark (ctx, "A", length * loc, h3)};
		loc = s . location (octave + 5 / 6); if (loc < limit) {mark (ctx, "", length * loc , h3)};
		loc = s . location (octave + 11 / 12); if (loc < limit) {mark (ctx, "B", length * loc, h3)};
	};
	draw_XR (ctx, s . location, length, 0, 4, limit, h2, 1 / 12, 1 / 24, 1 / 12);
	var limit = - s . left_extension;
	loc = s . location (- 1 / 12); if (loc > limit) {mark (ctx, "B", length * loc , h3)};
	loc = s . location (- 1 / 6); if (loc > limit) {mark (ctx, "", length * loc , h3)};
	loc = s . location (- 1 / 4); if (loc > limit) {mark (ctx, "A", length * loc , h3)};
	loc = s . location (- 1 / 3); if (loc > limit) {mark (ctx, "", length * loc , h3)};
	loc = s . location (- 5 / 12); if (loc > limit) {mark (ctx, "G", length * loc , h3)};
	loc = s . location (- 1 / 2); if (loc > limit) {mark (ctx, "", length * loc , h3)};
	loc = s . location (- 7 / 12); if (loc > limit) {mark (ctx, "F", length * loc, h3)};
	loc = s . location (- 2 / 3); if (loc > limit) {mark (ctx, "E", length * loc , h3)};
	loc = s . location (- 3 / 4); if (loc > limit) {mark (ctx, "", length * loc, h3)};
	loc = s . location (- 5 / 6); if (loc > limit) {mark (ctx, "D", length * loc , h3)};
	loc = s . location (- 11 / 12); if (loc > limit) {mark (ctx, "", length * loc, h3)};
	loc = s . location (- 1); if (loc > limit) {mark (ctx, "C=1", length * loc, h5)};
	draw_XL (ctx, s . location, length, -1, 0, limit, h2, 1 / 12, 1 / 24, 1 / 12);
};
var draw_lngamma0 = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var limit = 1 + s . right_extension;
	draw_MRS (ctx, s . location, length, 2.5, 3.8, .1, limit, h5);
	draw_XR (ctx, s . location, length, 2.5, 3.8, limit, h3, .1, .05, .1);
	draw_XR (ctx, s . location, length, 2.5, 3.8, limit, h2, .05, .01, .05);
//	draw_XR (ctx, s . location, length, 4, 5, limit, h2, .1, .02, .1);
	limit = - s . right_extension;
	draw_MLS (ctx, s . location, length, 2.1, 2.5, .05, limit, h5);
	draw_XL (ctx, s . location, length, 2.1, 2.5, limit, h3, .05, .01, .05);
	draw_XL (ctx, s . location, length, 2.1, 2.5, limit, h2, .01, .005, .01);
};
var draw_lngamma1 = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var limit = 1 + s . right_extension;
	draw_MRS (ctx, s . location, length, 4, 10, .5, limit, h5);
	draw_XR (ctx, s . location, length, 4, 10, limit, h3, .5, .1, .5);
	draw_XR (ctx, s . location, length, 5, 10, limit, h2, .1, .05, .1);
	draw_XR (ctx, s . location, length, 4, 5, limit, h2, .1, .02, .1);
	limit = - s . right_extension;
	draw_MLS (ctx, s . location, length, 3, 4, .2, limit, h5);
	draw_XL (ctx, s . location, length, 3, 4, limit, h3, .2, .1, .2);
	draw_XL (ctx, s . location, length, 3, 4, limit, h2, .1, .02, .1);
};
var draw_lngamma2 = function (ctx, length, height, s) {
	var h5 = height * 0.5; var h4 = height * 0.4; var h3 = height * 0.3; var h2 = height * 0.2;
	var limit = 1 + s . right_extension;
	draw_MRS (ctx, s . location, length, 20, 50, 5, limit, h5);
	draw_XR (ctx, s . location, length, 20, 50, limit, h3, 5, 1, 5);
	draw_XR (ctx, s . location, length, 30, 50, limit, h2, 1, .5, 1);
	draw_XR (ctx, s . location, length, 20, 30, limit, h2, 1, .2, 1);
	draw_MRS (ctx, s . location, length, 10, 20, 1, limit, h5);
	draw_XR (ctx, s . location, length, 14, 20, limit, h3, 2, 1, 2);
	draw_XR (ctx, s . location, length, 14, 20, limit, h2, 1, .2, 1);
	draw_XR (ctx, s . location, length, 10, 14, limit, h4, 2, 1, 2);
	draw_XR (ctx, s . location, length, 10, 14, limit, h3, 1, .5, 1);
	draw_XR (ctx, s . location, length, 10, 14, limit, h2, .5, .1, .5);
	limit = - s . right_extension;
	draw_MLS (ctx, s . location, length, 8, 10, 0.5, limit, h5);
	draw_XL (ctx, s . location, length, 8, 10, limit, h2, .5, .1, .5);
};
