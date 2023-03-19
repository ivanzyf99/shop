package com.ideabobo.service;

import com.ideabobo.model.Kuaidi;

public interface KuaidiMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Kuaidi record);

    int insertSelective(Kuaidi record);

    Kuaidi selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Kuaidi record);

    int updateByPrimaryKey(Kuaidi record);
}