package br.net.lol.service;

import br.net.lol.dto.PedidoDto;
import br.net.lol.model.PedidoModel;
import br.net.lol.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public List<PedidoDto> findAll() {
        return pedidoRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public Optional<PedidoDto> findById(Long id) {
        return pedidoRepository.findById(id).map(this::convertToDto);
    }

    public PedidoDto save(PedidoDto pedidoDto) {
        PedidoModel pedidoModel = convertToModel(pedidoDto);
        PedidoModel savedPedido = pedidoRepository.save(pedidoModel);
        return convertToDto(savedPedido);
    }

    public void deleteById(Long id) {
        pedidoRepository.deleteById(id);
    }

    private PedidoDto convertToDto(PedidoModel pedidoModel) {
        PedidoDto pedidoDto = new PedidoDto();
        pedidoDto.setId(pedidoModel.getId());
        pedidoDto.setCliente(pedidoModel.getCliente());
        pedidoDto.setDataCriacao(pedidoModel.getDataCriacao().toString());
        pedidoDto.setData(pedidoModel.getData().toString());
        pedidoDto.setValor(pedidoModel.getValor());
        pedidoDto.setStatus(pedidoModel.getStatus());
        return pedidoDto;
    }

    private PedidoModel convertToModel(PedidoDto pedidoDto) {
        PedidoModel pedidoModel = new PedidoModel();
        pedidoModel.setId(pedidoDto.getId());
        pedidoModel.setCliente(pedidoDto.getCliente());
        pedidoModel.setDataCriacao(LocalDateTime.parse(pedidoDto.getDataCriacao()));
        pedidoModel.setData(LocalDateTime.parse(pedidoDto.getData()));
        pedidoModel.setValor(pedidoDto.getValor());
        pedidoModel.setStatus(pedidoDto.getStatus());
        return pedidoModel;
    }
}
