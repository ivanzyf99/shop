/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : shoppayshopsmgpeisongtuangou_up_ssm2

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2023-03-18 22:18:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for wct_address
-- ----------------------------
DROP TABLE IF EXISTS `wct_address`;
CREATE TABLE `wct_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_address
-- ----------------------------
INSERT INTO `wct_address` VALUES ('38', '小新 15123385885 某某地址', '66');

-- ----------------------------
-- Table structure for wct_bill
-- ----------------------------
DROP TABLE IF EXISTS `wct_bill`;
CREATE TABLE `wct_bill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gids` varchar(100) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL,
  `uid` varchar(100) DEFAULT NULL,
  `shop` varchar(100) DEFAULT NULL,
  `ndate` varchar(255) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `gnames` varchar(500) DEFAULT NULL,
  `sid` varchar(10) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `note` varchar(200) DEFAULT NULL,
  `statecn` varchar(50) DEFAULT NULL,
  `pnote` varchar(255) DEFAULT NULL,
  `pf` varchar(255) DEFAULT NULL,
  `shstatecn` varchar(255) DEFAULT NULL,
  `shnote` varchar(255) DEFAULT NULL,
  `shtype` varchar(255) DEFAULT NULL,
  `fhnote` varchar(255) DEFAULT NULL,
  `kid` varchar(255) DEFAULT NULL,
  `ktitle` varchar(255) DEFAULT NULL,
  `kcode` varchar(255) DEFAULT NULL,
  `qid` int(11) DEFAULT NULL,
  `qusername` varchar(255) DEFAULT NULL,
  `qtel` varchar(255) DEFAULT NULL,
  `bgcounts` varchar(255) DEFAULT NULL,
  `way` varchar(255) DEFAULT NULL,
  `ydate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_bill
-- ----------------------------
INSERT INTO `wct_bill` VALUES ('99', '42,40', 'ideabobo', '66', '小小生鲜店', '2023-02-27 15:00:34', '660', '耙耙柑*3斤,生鱼片*3斤', '5', '', '', '', '已发货', '', '4', '', '', '', '已打包完毕', '', '', '', '67', 'peisong', '15123385885', '', '配送', null);
INSERT INTO `wct_bill` VALUES ('100', '41,39', 'ideabobo', '66', '小小生鲜店', '2023-02-27 15:14:14', '131', '培根*1斤,鲜活大虾*1斤', '5', '', '小新 15123385885 某某地址', '', '待领取', '', '', '', '', '', '已全部打包完毕', '', '', '', null, '', '', '', '配送', null);
INSERT INTO `wct_bill` VALUES ('101', '43,42', 'ideabobo', '66', '小小生鲜店', '2023-02-27 15:15:16', '120', '新鲜苹果*3斤,耙耙柑*3斤', '5', '', '小新 15123385885 某某地址', '', '已评价', '', '4', '待处理', '已经过期了', '换货', '', '', '', '', null, '', '', '', '配送', null);
INSERT INTO `wct_bill` VALUES ('102', '43', 'ideabobo', '66', '小小生鲜店', '2023-02-27 15:14:08', '20', '新鲜苹果*1', '5', '', '小新 15123385885 某某地址', '', '待领取', '', '', '', '', '', '', '', '', '', '67', 'tuanzhang2 文星路1号', '', '', '配送', '');
INSERT INTO `wct_bill` VALUES ('103', '43,40', 'ideabobo', '66', '小小生鲜店', '2023-02-27 15:14:02', '220', '新鲜苹果*1,生鱼片*1', '5', '', '小新 15123385885 某某地址', '', '待领取', '', '', '', '', '', '', '', '', '', '67', 'tuanzhang2 文星路1号', '', '', '自取', '');
INSERT INTO `wct_bill` VALUES ('104', '40,41,43', 'ideabobo', '66', '小小生鲜店', '2023-03-16 20:35:31', '231', '生鱼片*1,培根*1,新鲜苹果*1', '5', '', '小新 15123385885 某某地址', '', '已领取', '', '', '', '', '', '', '', '', '', '67', 'tuanzhang2 文星路1号', '', '', '配送', '');

-- ----------------------------
-- Table structure for wct_brand
-- ----------------------------
DROP TABLE IF EXISTS `wct_brand`;
CREATE TABLE `wct_brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_brand
-- ----------------------------

-- ----------------------------
-- Table structure for wct_good
-- ----------------------------
DROP TABLE IF EXISTS `wct_good`;
CREATE TABLE `wct_good` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gname` varchar(100) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `note` varchar(2000) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `typeid` varchar(10) DEFAULT NULL,
  `sid` varchar(10) DEFAULT NULL,
  `shop` varchar(50) DEFAULT NULL,
  `mcount` varchar(50) DEFAULT NULL,
  `btype` varchar(255) DEFAULT NULL,
  `statecn` varchar(255) DEFAULT NULL,
  `stype` varchar(255) DEFAULT NULL,
  `ppid` int(11) DEFAULT NULL,
  `pptitle` varchar(255) DEFAULT NULL,
  `ctype` varchar(255) DEFAULT NULL,
  `ctypeid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_good
-- ----------------------------
INSERT INTO `wct_good` VALUES ('39', '鲜活大虾', '120', '', '海鲜', '7f2165b7-4b7b-4d8a-95e6-e7d530d54043.jpg', '40', '5', '小小生鲜店', '233', '1', '上架中', '新品', null, '', '', null);
INSERT INTO `wct_good` VALUES ('40', '生鱼片', '200', '', '海鲜', '4ec663aa-fa0d-44c7-9510-d086176e6a8b.jpg', '40', '5', '小小生鲜店', '2354', '1', '上架中', '热销', null, '', '', null);
INSERT INTO `wct_good` VALUES ('41', '培根', '11', '', '肉类', '455cef49-800b-48fe-8c43-0cb7a1949587.jpg', '39', '5', '小小生鲜店', '23', '1', '上架中', '热销', null, '', '', null);
INSERT INTO `wct_good` VALUES ('42', '耙耙柑', '20', '', '水果', '102333fa-5f95-4b4a-a752-16b1a8f59aa7.jpg', '37', '5', '小小生鲜店', '200', '1', '上架中', '特价', null, '', '', null);
INSERT INTO `wct_good` VALUES ('43', '新鲜苹果', '20', '<p>这里对商品进行详细的介绍,可以支持多图多视频编辑的</p><p><img src=\"upload/2d0c7dc5-bdfa-4bda-ab8b-3f5e56b27318.jpg\" style=\"max-width:100%;\"/><br/></p><p><img src=\"upload/3f482e73-0136-4724-974d-677db50f00e0.jpg\" style=\"max-width:100%;\"/><br/></p><p>自己编辑,我这里演示功能随便选了几个图片</p>', '水果', '4f55bb1c-54c5-4dd3-929a-4317f6a323b0.jpg', '37', '5', '小小生鲜店', '123', '1', '上架中', '特价', null, '', '苹果', '23');
INSERT INTO `wct_good` VALUES ('44', '红富士', '33', '<p>详细的商品介绍信息详细的商品介绍信息详细的商品介绍信息详细的商品介绍信息详细的商品介绍信息详细的商品介绍信息详细的商品介绍信息详细的商品介绍信息详细的商品介绍信息详细的商品介绍信息详细的商品介绍信息详细的商品介绍信息<img src=\"upload/7d0c0d86-4445-478e-bd9f-0a4a2cd26a97.jpg\" style=\"max-width: 100%;\"/></p><p>可以自己图文编辑的</p>', '水果', 'e4715053-1550-4927-9a93-c884f9b9e328.jpg', '37', '6', '美美超市', '3433', '1', '上架中', '新品', null, '', '香蕉', '29');

-- ----------------------------
-- Table structure for wct_huihua
-- ----------------------------
DROP TABLE IF EXISTS `wct_huihua`;
CREATE TABLE `wct_huihua` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '发送者id',
  `fid` int(11) DEFAULT NULL COMMENT '接收者id',
  `qid` int(11) DEFAULT NULL COMMENT '群id',
  `type` int(11) DEFAULT NULL COMMENT '类型',
  `zan` int(11) DEFAULT '0',
  `note` varchar(500) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL COMMENT '发送者名称',
  `fusername` varchar(50) DEFAULT NULL COMMENT '接收者名称',
  `attach` varchar(200) DEFAULT NULL,
  `attachname` varchar(200) DEFAULT NULL COMMENT '附件名称',
  `img` varchar(200) DEFAULT NULL COMMENT '图片',
  `qtitle` varchar(255) DEFAULT NULL,
  `msgtype` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_huihua
-- ----------------------------

-- ----------------------------
-- Table structure for wct_kuaidi
-- ----------------------------
DROP TABLE IF EXISTS `wct_kuaidi`;
CREATE TABLE `wct_kuaidi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `code` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_kuaidi
-- ----------------------------

-- ----------------------------
-- Table structure for wct_message
-- ----------------------------
DROP TABLE IF EXISTS `wct_message`;
CREATE TABLE `wct_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '用户id',
  `fid` int(11) DEFAULT NULL COMMENT '朋友id',
  `qid` int(11) DEFAULT NULL COMMENT '群id',
  `type` int(11) DEFAULT NULL COMMENT '消息类型',
  `zan` int(11) DEFAULT '0',
  `note` varchar(500) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL COMMENT '发送者名称',
  `fusername` varchar(50) DEFAULT NULL COMMENT '朋友名称',
  `attach` varchar(200) DEFAULT NULL COMMENT '附件文件',
  `attachname` varchar(200) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL COMMENT '图片',
  `qtitle` varchar(255) DEFAULT NULL,
  `msgtype` int(10) DEFAULT NULL,
  `fimg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_message
-- ----------------------------

-- ----------------------------
-- Table structure for wct_notice
-- ----------------------------
DROP TABLE IF EXISTS `wct_notice`;
CREATE TABLE `wct_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_notice
-- ----------------------------
INSERT INTO `wct_notice` VALUES ('15', '生鲜配送上线啦', '', '2023-02-14 14:33:28', '1', 'dc0e111c-70fc-44f8-8e20-aafabf7c71cf.jpg');
INSERT INTO `wct_notice` VALUES ('16', '测试广告', '<p>同样的自己详细编辑详情</p><p><img src=\"upload/d6b4e7ce-8635-4235-964d-2b5ba2705f64.jpg\" style=\"max-width:100%;\"/><br/></p><p><img src=\"upload/98d8695f-2b18-406f-9ab4-066b39009d3b.jpg\" style=\"max-width:100%;\"/><br/></p><p><img src=\"upload/173e71b5-1a7c-4ae6-b9ad-a42d5ed81a73.jpg\" style=\"max-width:100%;\"/><br/></p>', '2023-02-14 14:59:10', '1', 'e21f73a9-59c7-4314-aec9-fb1d18ff5e58.jpg');

-- ----------------------------
-- Table structure for wct_posts
-- ----------------------------
DROP TABLE IF EXISTS `wct_posts`;
CREATE TABLE `wct_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `uid` varchar(10) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `sdate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_posts
-- ----------------------------
INSERT INTO `wct_posts` VALUES ('36', '可以发帖反馈', '<p>配送再快一些吧</p>', '66', 'ideabobo', '2023-02-14 15:01:42', '', '1', null, '');
INSERT INTO `wct_posts` VALUES ('37', '可以发帖反馈留言', '<p>啊手动阀打发</p>', '66', 'ideabobo', '2023-02-27 15:13:29', '', '1', null, '');

-- ----------------------------
-- Table structure for wct_replay
-- ----------------------------
DROP TABLE IF EXISTS `wct_replay`;
CREATE TABLE `wct_replay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(10) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `uid` varchar(10) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_replay
-- ----------------------------
INSERT INTO `wct_replay` VALUES ('1', '36', '回复交流反馈', '', '', '2023-02-26 15:03:52', null);
INSERT INTO `wct_replay` VALUES ('2', '36', '可以回复反馈交流', '', '', '2023-02-27 15:05:33', null);

-- ----------------------------
-- Table structure for wct_shop
-- ----------------------------
DROP TABLE IF EXISTS `wct_shop`;
CREATE TABLE `wct_shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sname` varchar(100) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `longitude` varchar(100) DEFAULT NULL,
  `latitude` varchar(100) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `ownid` varchar(10) DEFAULT NULL,
  `passwd` varchar(50) DEFAULT NULL,
  `codeimg` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_shop
-- ----------------------------
INSERT INTO `wct_shop` VALUES ('5', '小小生鲜店', 'd44c238c-a786-41aa-afb2-3389d132f3a6.jpg', '详细的店铺介绍信息', '某某地址', '', '', '17162646464', '', '', '');
INSERT INTO `wct_shop` VALUES ('6', '美美超市', '5870732d-de7d-449f-be0a-7d304dbce567.jpg', '详细的备注介绍', '某某地址', '', '', '16123385885', '', '', '');

-- ----------------------------
-- Table structure for wct_type
-- ----------------------------
DROP TABLE IF EXISTS `wct_type`;
CREATE TABLE `wct_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `ownid` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_type
-- ----------------------------
INSERT INTO `wct_type` VALUES ('37', '水果', '');
INSERT INTO `wct_type` VALUES ('38', '蔬菜', '');
INSERT INTO `wct_type` VALUES ('39', '肉类', '');
INSERT INTO `wct_type` VALUES ('40', '海鲜', '');
INSERT INTO `wct_type` VALUES ('41', '速冻', '');
INSERT INTO `wct_type` VALUES ('42', '零食', '');

-- ----------------------------
-- Table structure for wct_type2
-- ----------------------------
DROP TABLE IF EXISTS `wct_type2`;
CREATE TABLE `wct_type2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `pid` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_type2
-- ----------------------------
INSERT INTO `wct_type2` VALUES ('23', '苹果', '37');
INSERT INTO `wct_type2` VALUES ('24', '虾', '40');
INSERT INTO `wct_type2` VALUES ('25', '鱼', '40');
INSERT INTO `wct_type2` VALUES ('26', '薯片', '42');
INSERT INTO `wct_type2` VALUES ('27', '巧克力', '42');
INSERT INTO `wct_type2` VALUES ('28', '饼干', '42');
INSERT INTO `wct_type2` VALUES ('29', '香蕉', '37');
INSERT INTO `wct_type2` VALUES ('30', '梨', '37');

-- ----------------------------
-- Table structure for wct_user
-- ----------------------------
DROP TABLE IF EXISTS `wct_user`;
CREATE TABLE `wct_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `passwd` varchar(50) DEFAULT NULL,
  `roletype` varchar(50) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `qq` varchar(20) DEFAULT NULL,
  `wechat` varchar(50) DEFAULT NULL,
  `sex` varchar(20) DEFAULT NULL,
  `birth` varchar(20) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `sid` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `statecn` varchar(50) DEFAULT NULL,
  `clientId` varchar(200) DEFAULT NULL,
  `nickname` varchar(200) DEFAULT NULL,
  `favs` varchar(200) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `openid` varchar(200) DEFAULT NULL,
  `typeid` int(11) DEFAULT NULL,
  `typecn` varchar(255) DEFAULT NULL,
  `tiwen` varchar(255) DEFAULT NULL,
  `jknote` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_user
-- ----------------------------
INSERT INTO `wct_user` VALUES ('1', 'admin', 'admin', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `wct_user` VALUES ('64', 'dianpu', '111111', '3', '', '15123387666', '', '', '', '', '17099314-20c5-4855-9d11-5b030484b75c.jpeg', '5', '', '', '', '', '', null, '', null, null, null, null);
INSERT INTO `wct_user` VALUES ('65', 'fenjian', '111111', '5', '', '16123385885', '', '', '', '', '1bbe1663-9850-4852-afd3-0a48650f97a3.jpeg', '5', '', '', '', '', '', null, '', null, null, null, null);
INSERT INTO `wct_user` VALUES ('66', 'ideabobo', '111111', '2', '', '15123385885', '', '', '女', '', 'b822e7ed-f867-4aba-afdd-08cbf61ac92f.jpeg', '', '', '', '', '', '43', '818', '', null, null, null, null);
INSERT INTO `wct_user` VALUES ('67', 'tuanzhang2', '111111', '4', '', '15123375775', '', '', '', '', '1943c1f9-841f-489c-b9aa-ed4ce12d90b7.jpeg', '5', '文星路1号', '', '', '', '', '16', '', '41', null, '36.6', '健康');
INSERT INTO `wct_user` VALUES ('68', 'tuanzhang3', '111111', '4', '', '15123385885', '', '', '', '', 'd15c1a20-7828-49c3-bdc8-1ac105be4494.png', '5', '小小路11号', '', '', '', '', null, '', '41', '', '', '');
INSERT INTO `wct_user` VALUES ('69', '', '', '2', '', '', '', '', '', '', '', '', '', '', '', '', '', null, 'oe-Zu5opGF3DAuEKmhHvy6zIted0', null, '', '', '');

-- ----------------------------
-- Table structure for wct_youhuiquan
-- ----------------------------
DROP TABLE IF EXISTS `wct_youhuiquan`;
CREATE TABLE `wct_youhuiquan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total` int(11) DEFAULT NULL,
  `extime` int(11) DEFAULT NULL,
  `sid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `typeid` int(11) DEFAULT NULL,
  `fulluse` int(11) DEFAULT NULL,
  `ndate` varchar(255) DEFAULT NULL,
  `extimestr` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `statecn` varchar(255) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_youhuiquan
-- ----------------------------
INSERT INTO `wct_youhuiquan` VALUES ('42', '5', '1690473600', '1', null, '1', '20', '2023-02-14 14:33:48', '2023-07-28 11:11', '', '', null);
INSERT INTO `wct_youhuiquan` VALUES ('43', '10', '1684598400', '1', null, '1', '100', '2023-02-14 14:59:25', '2023-05-21 11:11', '', '', null);
INSERT INTO `wct_youhuiquan` VALUES ('44', '20', '1682006400', '1', null, '1', '200', '2023-02-26 15:03:44', '2023-04-21 11:11', '', '', null);
INSERT INTO `wct_youhuiquan` VALUES ('45', '20', '1682006400', '1', '66', '2', '200', '2023-02-26 15:03:44', '2023-04-21 11:11', 'ideabobo', '正常', '44');
INSERT INTO `wct_youhuiquan` VALUES ('46', '5', '1690473600', '1', '66', '2', '20', '2023-02-14 14:33:48', '2023-07-28 11:11', 'ideabobo', '正常', '42');
